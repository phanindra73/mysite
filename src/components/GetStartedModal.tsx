import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Send, CheckCircle, GraduationCap, Mail, Phone, User, 
  BookOpen, CreditCard, QrCode, Wallet, ShieldCheck, 
  Receipt, ArrowRight, ArrowLeft, Percent, Lock, Sparkles, 
  AlertCircle, Download, Landmark, Check
} from 'lucide-react';
import { getCourseByTitle } from '../data/academyData';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProgram?: string;
}

// Pricing mapping for programs in Indian Rupees (and USD reference)
const programPricing: Record<string, { inr: number; usd: number; code: string; duration: string }> = {
  'AI Engineer Program': { inr: 75000, usd: 899, code: 'SUN-AIE-2026', duration: '6 Months' },
  'Agentic AI Developer Program': { inr: 60000, usd: 720, code: 'SUN-AAI-2026', duration: '4 Months' },
  'Full Stack AI Developer Program': { inr: 85000, usd: 1020, code: 'SUN-FSD-2026', duration: '6 Months' },
  'Data Science & AI Program': { inr: 70000, usd: 840, code: 'SUN-DSA-2026', duration: '6 Months' }
};

export default function GetStartedModal({ isOpen, onClose, initialProgram }: GetStartedModalProps) {
  // Primary application step tracking
  // 'form' -> user inputs info
  // 'payment' -> payment select & input card/UPI/netbanking
  // 'processing' -> loading state showing micro steps
  // 'receipt' -> success state with download receipt
  const [modalStep, setModalStep] = useState<'form' | 'payment' | 'processing' | 'receipt'>('form');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'AI Engineer Program',
    experience: 'Fresher',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Payment Flow Details
  const [paymentOption, setPaymentOption] = useState<'full' | 'deposit'>('full');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'netbanking'>('card');
  
  // Payment Options States
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: ''
  });
  const [upiId, setUpiId] = useState('');
  const [selectedBank, setSelectedBank] = useState('SBI');

  // Interactive logs shown during 'processing' step
  const [processingLog, setProcessingLog] = useState('');
  const [processingProgress, setProcessingProgress] = useState(0);

  // Generated receipt reference
  const [receiptDetails, setReceiptDetails] = useState({
    receiptId: '',
    txnId: '',
    date: '',
    originalPrice: 0,
    discountRate: 0,
    discountValue: 0,
    gstAmount: 0,
    paidAmount: '',
    formattedPriceINR: ''
  });

  const [programs, setPrograms] = useState([
    'AI Engineer Program',
    'Agentic AI Developer Program',
    'Full Stack AI Developer Program',
    'Data Science & AI Program'
  ]);

  // Auto-fill active program title if needed when modal opens
  useEffect(() => {
    if (isOpen) {
      if (initialProgram) {
        if (!programs.includes(initialProgram)) {
          setPrograms(prev => [...prev, initialProgram]);
        }
        setFormData(prev => ({ ...prev, program: initialProgram }));
      }
      if (modalStep === 'form') {
        // Keep state clean on reopen
        setCardDetails({ number: '', name: '', expiry: '', cvc: '' });
        setUpiId('');
      }
    }
  }, [isOpen, initialProgram, programs]);

  // Format Card Number (with spaces)
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    let matches = value.match(/\d{4,16}/g);
    let match = (matches && matches[0]) || '';
    let parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length > 0) {
      setCardDetails({ ...cardDetails, number: parts.join(' ') });
    } else {
      setCardDetails({ ...cardDetails, number: value });
    }
  };

  // Format Card Expiry
  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (value.length > 2) {
      setCardDetails({ ...cardDetails, expiry: value.substring(0, 2) + '/' + value.substring(2, 4) });
    } else {
      setCardDetails({ ...cardDetails, expiry: value });
    }
  };

  // Initial Form Submit
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Smooth transition to payment module after quick authorization check
    setTimeout(() => {
      setIsSubmitting(false);
      setModalStep('payment');
    }, 900);
  };

  // Compute values for chosen program
  const resolveActiveCoursePrice = (programName: string) => {
    const defaultPrice = programPricing[programName];
    if (defaultPrice) return defaultPrice;

    const matchedAcademyCourse = getCourseByTitle(programName);
    if (matchedAcademyCourse) {
      return {
        inr: matchedAcademyCourse.feeINR,
        usd: Math.round(matchedAcademyCourse.feeINR / 83),
        code: 'SUN-' + matchedAcademyCourse.title.replace(/[^a-zA-Z]/g, '').substring(0, 4).toUpperCase() + '-2026',
        duration: matchedAcademyCourse.duration
      };
    }
    return programPricing['AI Engineer Program'];
  };

  const activeCoursePrice = resolveActiveCoursePrice(formData.program);
  const basePriceINR = activeCoursePrice.inr;
  const bookingFeeINR = 5000; // Standard nominal block fee
  const discountRateValue = 0; // 0% cash discount
  const discountAmount = Math.round(basePriceINR * discountRateValue);
  const beforeTaxPrice = paymentOption === 'full' ? (basePriceINR - discountAmount) : bookingFeeINR;
  
  // GST calculation (18% inclusive)
  const gstPart = Math.round(beforeTaxPrice * 0.15254); // 18% inclusive calculation formula
  const netBeforeTax = beforeTaxPrice - gstPart;
  const totalAmount = beforeTaxPrice;

  // Render prices formatted nicely
  const getFormattedPrice = (amt: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amt);
  };

  // Secure Checkout execution
  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setModalStep('processing');
    setProcessingProgress(25);
    setProcessingLog('Creating secure Razorpay order payload...');

    try {
      // 1. Create order from backend
      const res = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: totalAmount,
          currency: 'INR',
          receipt: `receipt_${Date.now()}`
        })
      });

      if (!res.ok) throw new Error('Network response was not ok');
      const order = await res.json();
      
      setProcessingProgress(50);
      setProcessingLog('Opening secure Razorpay modal overlay & authorizing bank gateway connection...');

      // 2. Initialize Razorpay options
      const options = {
        key: "rzp_live_T3o7Ich5sBMybC", // Public Key
        amount: order.amount,
        currency: order.currency,
        name: "The Sun Technologies",
        description: `Enrollment: ${formData.program}`,
        order_id: order.id,
        handler: async function (response: any) {
          setProcessingProgress(75);
          setProcessingLog('Verifying Razorpay digital signatures...');
          
          try {
            // 3. Verify Payment
            const verifyRes = await fetch('/api/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(response)
            });

            const verifyData = await verifyRes.json();
            
            if (verifyData.success) {
              setProcessingProgress(100);
              setProcessingLog('Success! Enrolling cadet seat info & creating digital admission logs...');
              
              // 4. Generate receipt details based on real Razorpay transaction
              const randReceipt = 'SUN-REC-' + Math.floor(100000 + Math.random() * 90000);
              const currentDate = new Date().toLocaleDateString('en-IN', {
                day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
              });

              setReceiptDetails({
                receiptId: randReceipt,
                txnId: response.razorpay_payment_id,
                date: currentDate,
                originalPrice: basePriceINR,
                discountRate: discountRateValue * 100,
                discountValue: discountAmount,
                gstAmount: gstPart,
                paidAmount: getFormattedPrice(totalAmount),
                formattedPriceINR: getFormattedPrice(basePriceINR)
              });

              setModalStep('receipt');
            } else {
              alert('Payment Verification Failed');
              setModalStep('payment');
            }
          } catch (err) {
            console.error(err);
            alert('Verification Error');
            setModalStep('payment');
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone
        },
        theme: {
          color: "#e41e3d"
        }
      };

      // @ts-ignore
      const rzp = new window.Razorpay(options);
      
      rzp.on('payment.failed', function (response: any){
        console.error(response.error);
        alert(response.error.description);
        setModalStep('payment');
      });

      rzp.open();

    } catch (error) {
      console.error(error);
      alert('Order creation failed. Is the backend server running?');
      setModalStep('payment');
    }
  };

  // Download simulation
  const downloadReceipt = () => {
    const text = `===========================================================
               THE SUN TECHNOLOGIES ACADEMY
                 ADMISSION RECEIPT & INVOICE
===========================================================
Receipt Reference : ${receiptDetails.receiptId}
Transaction ID    : ${receiptDetails.txnId}
Gate IP & Gateway : RAZORPAY SECURED API v3
Issue Date        : ${receiptDetails.date}
Admission Status  : SUCCESS - REGISTERED & SEAT GUARANTEED
-----------------------------------------------------------
STUDENT PROFILE DETAILS:
Candidate Name    : ${formData.name}
Email Address     : ${formData.email}
Phone Number      : ${formData.phone}
Experience Track  : ${formData.experience}
-----------------------------------------------------------
ACADEMIC STREAM ASSIGNED:
Program           : ${formData.program} (${activeCoursePrice.code})
Academic Term     : 2026 Cohort
Duration & Term   : ${activeCoursePrice.duration}
Syllabus Access   : Blended Mode Activated (LMS Credentials Inbound)
-----------------------------------------------------------
BILLING & FINANCIALS (INR):
Fee Structure     : ${paymentOption === 'full' ? 'Full Program Tuition Access' : 'Initial Seat Reservation Token'}
Original Price    : ${getFormattedPrice(receiptDetails.originalPrice)}
Special Discount  : ${receiptDetails.discountRate}% Off (${getFormattedPrice(receiptDetails.discountValue)})
Taxation (Taxes)  : 18% GST Included (Amount: ${getFormattedPrice(receiptDetails.gstAmount)})
-----------------------------------------------------------
GRAND TOTAL PAID  : ${receiptDetails.paidAmount} (PAID IN FULL)
===========================================================
CONGRATULATIONS!
Your course slot has been securely booked.
The Sun Technologies academic coordinator will issue your 
LMS credentials and classroom schedules within 24 hours.

If you have any queries, please mail to phaniovv@gmail.com
Thank you for trusting Sun Technologies.
===========================================================`;

    const element = document.createElement("a");
    const file = new Blob([text], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `SunAcademy_Admission_Receipt_${receiptDetails.receiptId}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      program: 'AI Engineer Program',
      experience: 'Fresher',
      message: ''
    });
    setModalStep('form');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-55 overflow-y-auto" id="get-started-modal-container">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={resetForm}
          />

          <div className="flex min-h-screen items-center justify-center p-3 sm:p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className={`relative w-full ${
                modalStep === 'payment' ? 'max-w-3xl' : modalStep === 'receipt' ? 'max-w-xl' : 'max-w-lg'
              } bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 z-10 transition-all duration-300`}
              id="get-started-form"
            >
              {/* Top progress indicator for active payment experience */}
              <div className="flex h-1.5 bg-slate-100 w-full">
                <div 
                  className="bg-[#e41e3d] h-full transition-all duration-500" 
                  style={{ 
                    width: modalStep === 'form' ? '25%' : 
                           modalStep === 'payment' ? '60%' : 
                           modalStep === 'processing' ? '85%' : '100%' 
                  }} 
                />
              </div>

              {/* Header block with company brand */}
              <div className="bg-[#e41e3d] text-white p-5 sm:p-6 relative">
                {modalStep !== 'processing' && (
                  <button
                    onClick={resetForm}
                    className="absolute right-4 top-4 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X size={20} />
                  </button>
                )}
                
                <div className="flex items-center gap-3">
                  <span className="p-2 bg-white/15 rounded-xl">
                    {modalStep === 'receipt' ? (
                      <CheckCircle size={24} className="text-white animate-pulse" />
                    ) : modalStep === 'payment' ? (
                      <CreditCard size={24} className="text-white" />
                    ) : (
                      <GraduationCap size={24} className="text-white" />
                    )}
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-sans">
                      {modalStep === 'form' && "Course Registration"}
                      {modalStep === 'payment' && "Enrollment Fee Clearance"}
                      {modalStep === 'processing' && "Securing Enrollment Connection"}
                      {modalStep === 'receipt' && "Registration & Enrollment Complete!"}
                    </h3>
                    <p className="text-white/85 text-xs mt-0.5">
                      {modalStep === 'form' && "Block your batch seat & schedule dynamic onboarding sessions"}
                      {modalStep === 'payment' && `Clear training tuition fees securely for ${formData.program}`}
                      {modalStep === 'processing' && "SSL Direct Banking verification protocol active..."}
                      {modalStep === 'receipt' && "Congratulations! Your academy admission logs have been authorized"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Body Content Blocks */}
              <div className="p-5 sm:p-6 bg-slate-50/10">
                
                {/* STAGE 1: Standard Registration Form info */}
                {modalStep === 'form' && (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                        Full Name *
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                          <User size={16} />
                        </span>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-[#e41e3d] transition-all"
                          placeholder="Candidate Name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                          Email Address *
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                            <Mail size={15} />
                          </span>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-[#e41e3d] transition-all"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                            <Phone size={15} />
                          </span>
                          <input
                            type="tel"
                            required
                            pattern="[0-9]{10,12}"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-[#e41e3d] transition-all"
                            placeholder="9876543210"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                        Select Training Program *
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                          <BookOpen size={15} />
                        </span>
                        <select
                          value={formData.program}
                          onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                          className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-[#e41e3d] transition-all appearance-none cursor-pointer"
                        >
                          {programs.map((prog) => {
                            const details = resolveActiveCoursePrice(prog);
                            return (
                              <option key={prog} value={prog}>
                                {prog} — {details.duration || '6 Months'}
                              </option>
                            );
                          })}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                        Professional Experience
                      </label>
                      <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-1">
                        {['Fresher', 'College Student', 'Working Professional'].map((exp) => (
                          <label 
                            key={exp} 
                            className={`flex flex-col items-center justify-center p-2.5 rounded-lg border text-center cursor-pointer transition-all ${
                              formData.experience === exp 
                                ? 'border-[#e41e3d] bg-red-50/20 text-[#e41e3d] font-semibold' 
                                : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                            }`}
                          >
                            <input
                              type="radio"
                              name="experience"
                              value={exp}
                              checked={formData.experience === exp}
                              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                              className="sr-only"
                            />
                            <span className="text-xs">{exp}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                        Career Goals / Guidelines (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full p-3 bg-white border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-[#e41e3d] transition-all resize-none"
                        placeholder="Tell us about yourself and what you are looking to achieve..."
                      />
                    </div>

                    <div className="pt-2 flex justify-end gap-3 border-t border-slate-100 pt-4">
                      <button
                        type="button"
                        onClick={resetForm}
                        className="px-5 py-2.5 text-sm font-semibold text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[#e41e3d] hover:bg-[#c91833] disabled:bg-red-400 text-white text-sm font-bold px-6 py-2.5 rounded-lg cursor-pointer shadow-md shadow-red-500/15 flex items-center gap-2 transition-all active:scale-98"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            <span>Processing...</span>
                          </>
                        ) : (
                          <>
                            <span>Continue to Payment</span>
                            <ArrowRight size={15} />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}


                {/* STAGE 2: Elegant Program Checkout Payment Selection */}
                {modalStep === 'payment' && (
                  <form onSubmit={handleCheckoutSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                      
                      {/* Left Block: Course pricing & breakdown summary */}
                      <div className="md:col-span-5 bg-slate-50 p-4 rounded-xl border border-slate-200/60 overflow-hidden flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between pb-3.5 border-b border-slate-200">
                            <div>
                              <span className="text-[10px] font-bold text-[#e41e3d] tracking-widest uppercase">Course Selected</span>
                              <h4 className="text-sm font-extrabold text-slate-800 leading-tight mt-0.5">{formData.program}</h4>
                            </div>
                            <span className="px-2 py-0.5 bg-red-100 text-[#e41e3d] text-[10px] font-bold rounded-full">
                              {activeCoursePrice.code}
                            </span>
                          </div>

                          {/* Quick selection of type of payment */}
                          <div className="space-y-2 mt-4">
                            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                              Payment Scheme
                            </label>

                            {/* Options buttons */}
                            <div className="space-y-2">
                              <button
                                type="button"
                                onClick={() => setPaymentOption('full')}
                                className={`w-full text-left p-2.5 rounded-lg border text-xs transition-all relative ${
                                  paymentOption === 'full'
                                    ? 'border-[#e41e3d] bg-white ring-2 ring-red-500/10'
                                    : 'border-slate-200 bg-white hover:border-slate-300'
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <span className="font-extrabold text-slate-800">Complete Course Fee</span>
                                </div>
                                <p className="text-[10px] text-slate-400 mt-0.5 font-medium">Clear full program amount securely.</p>
                              </button>

                              <button
                                type="button"
                                onClick={() => setPaymentOption('deposit')}
                                className={`w-full text-left p-2.5 rounded-lg border text-xs transition-all ${
                                  paymentOption === 'deposit'
                                    ? 'border-[#e41e3d] bg-white ring-2 ring-red-500/10'
                                    : 'border-slate-200 bg-white hover:border-slate-300'
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <span className="font-extrabold text-slate-800">Seat Reservation Advance</span>
                                  <span className="text-[10px] text-red-500 font-extrabold">Instant block</span>
                                </div>
                                <p className="text-[10px] text-slate-400 mt-0.5 font-medium">Pay nominal advance. Clear rest at batch start.</p>
                              </button>
                            </div>
                          </div>

                          {/* Price calculation block */}
                          <div className="mt-5 space-y-2 border-t border-slate-200 pt-4">
                            <div className="flex justify-between text-xs font-medium text-slate-500">
                              <span>Standard Tuition Fee</span>
                              <span className="text-slate-700">{getFormattedPrice(basePriceINR)}</span>
                            </div>

                            {paymentOption === 'deposit' && (
                              <div className="flex justify-between text-xs font-medium text-amber-600">
                                <span>Seat Advance Amount</span>
                                <span>{getFormattedPrice(bookingFeeINR)}</span>
                              </div>
                            )}

                            <div className="flex justify-between text-[11px] font-medium text-slate-400 italic">
                              <span>Includes 18% Academic GST</span>
                              <span>({getFormattedPrice(gstPart)})</span>
                            </div>

                            <div className="flex justify-between text-xs font-bold text-slate-800 border-t border-slate-200/50 pt-2 mt-1">
                              <span>Grand Total (INR)</span>
                              <span className="text-sm text-[#e41e3d] font-black">{getFormattedPrice(totalAmount)}</span>
                            </div>
                          </div>
                        </div>

                        {/* Secure compliance notice */}
                        <div className="mt-5 pt-3 border-t border-slate-200 flex flex-col gap-1.5">
                          <div className="flex items-center gap-2 text-[10px] text-slate-400 font-semibold leading-tight">
                            <ShieldCheck size={16} className="text-[#0B69FF] flex-shrink-0" />
                            <span>100% Secured via Razorpay Gateway</span>
                          </div>
                          <p className="text-[9px] text-slate-400 font-medium pl-6">
                            Supports Cards, UPI, Netbanking & Credit Lines.
                          </p>
                        </div>
                      </div>

                      {/* Right Block: Interactive payment inputs */}
                      <div className="md:col-span-7 space-y-4 flex flex-col justify-center">
                        <div className="bg-slate-50/50 p-6 rounded-xl border border-slate-100 text-center flex flex-col items-center justify-center h-full">
                          <ShieldCheck size={48} className="text-[#0B69FF] mb-4 opacity-80" />
                          <h4 className="text-sm font-bold text-slate-800 mb-2">Ready for Secure Checkout</h4>
                          <p className="text-xs text-slate-500 max-w-[250px] leading-relaxed">
                            Click <strong>Continue to Payment</strong> below. A secure Razorpay window will open where you can select your preferred payment method (UPI, Cards, Netbanking).
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Submit layout buttons */}
                    <div className="pt-4 flex justify-between items-center border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => setModalStep('form')}
                        className="text-xs font-bold text-[#e41e3d] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <ArrowLeft size={14} />
                        Back to candidate details
                      </button>

                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={resetForm}
                          className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-50"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="bg-[#e41e3d] hover:bg-[#c91833] text-white text-xs font-bold px-5 py-2.5 rounded-lg cursor-pointer shadow-md shadow-red-500/15 flex items-center gap-1.5 transition-all"
                        >
                          <Lock size={13} />
                          <span>Pay & Enroll Securely</span>
                        </button>
                      </div>
                    </div>
                  </form>
                )}


                {/* STAGE 3: Processing loading step */}
                {modalStep === 'processing' && (
                  <div className="my-8 flex flex-col items-center justify-center text-center space-y-6">
                    <div className="relative w-20 h-20">
                      {/* Cool multi circles spinner */}
                      <span className="absolute inset-0 rounded-full border-4 border-slate-100 border-t-[#e41e3d] animate-spin" />
                      <span className="absolute inset-2.5 rounded-full border-4 border-slate-200 border-b-[#e41e3d] animate-pulse" />
                      <div className="absolute inset-0 flex items-center justify-center text-[#e41e3d]">
                        <Lock size={22} className="animate-bounce" />
                      </div>
                    </div>

                    <div className="space-y-3 max-w-sm">
                      <h4 className="text-base font-extrabold text-slate-800">Authorizing Funds Protocol</h4>
                      
                      {/* Logs output */}
                      <div className="bg-slate-900 border border-slate-800 rounded-lg p-3 text-left font-mono text-[10px] text-green-400/90 shadow-inner h-16 flex items-center">
                        <span className="leading-relaxed animate-pulse">&gt; {processingLog}</span>
                      </div>

                      {/* Mini custom progress bar */}
                      <div className="h-1 w-48 bg-slate-100 rounded-full mx-auto overflow-hidden">
                        <div 
                          className="h-full bg-[#e41e3d] transition-all duration-300" 
                          style={{ width: `${processingProgress}%` }} 
                        />
                      </div>
                    </div>
                  </div>
                )}


                {/* STAGE 4: Admission confirmation and Print Receipt envelope */}
                {modalStep === 'receipt' && (
                  <motion.div
                    initial={{ scale: 0.98, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="space-y-5"
                    id="receipt-outcome-screen"
                  >
                    
                    {/* Compact printable Ticket Receipt Card */}
                    <div className="bg-white rounded-xl border border-slate-200 shadow-lg relative overflow-hidden">
                      <div className="absolute top-0 right-0 left-0 h-1 bg-[#e41e3d]" />
                      
                      {/* Top Header */}
                      <div className="p-4 bg-slate-50/50 border-b border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="p-1 bg-green-50 rounded text-green-600">
                            <Check size={14} className="stroke-[3]" />
                          </span>
                          <div>
                            <span className="text-[9px] font-bold text-green-600 block uppercase tracking-wider">Admission Success</span>
                            <span className="text-xs font-black text-slate-800">{receiptDetails.receiptId}</span>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="text-[9px] font-semibold text-slate-400 block tracking-wide">Date & Term</span>
                          <span className="text-[10px] font-bold text-slate-700">{receiptDetails.date}</span>
                        </div>
                      </div>

                      {/* Receipt items breakdown */}
                      <div className="p-4 space-y-3.5 text-xs">
                        
                        {/* Student block */}
                        <div>
                          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Enrolled Candidate</span>
                          <div className="bg-white p-2.5 rounded-lg border border-slate-100 flex justify-between items-center">
                            <div>
                              <span className="font-extrabold text-slate-800 block">{formData.name}</span>
                              <span className="text-[10px] text-slate-500 tracking-wide font-medium">{formData.email} • {formData.phone}</span>
                            </div>
                            <span className="text-[10px] font-semibold bg-slate-100 px-2 py-0.5 rounded text-slate-600">
                              {formData.experience}
                            </span>
                          </div>
                        </div>

                        {/* Stream / Course assigned */}
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Academic Stream</span>
                            <span className="font-extrabold text-slate-800 leading-tight block">{formData.program}</span>
                          </div>
                          <div>
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Mode & Duration</span>
                            <span className="font-bold text-slate-600 block">Blended Labs ({activeCoursePrice.duration})</span>
                          </div>
                        </div>

                        {/* Calculation summary */}
                        <div className="border-t border-slate-100 pt-3 flex items-center justify-between">
                          <div>
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Authorization Code</span>
                            <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold">{receiptDetails.txnId}</span>
                          </div>
                          <div className="text-right">
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Authorized Amount</span>
                            <span className="text-sm font-black text-green-600 block">{receiptDetails.paidAmount}</span>
                          </div>
                        </div>
                      </div>

                      {/* Ticket serration line decorations */}
                      <div className="relative h-2 flex items-center justify-between pointer-events-none">
                        <div className="w-2.5 h-5 bg-slate-50 border-r border-slate-200 rounded-r-full -ml-[6px]" />
                        <div className="border-t-2 border-dashed border-slate-200 w-full" />
                        <div className="w-2.5 h-5 bg-slate-50 border-l border-slate-200 rounded-l-full -mr-[6px]" />
                      </div>

                      {/* Footer guarantee inside the ticket */}
                      <div className="p-3 bg-green-50/20 text-center flex items-center justify-center gap-1.5 text-[10px] text-slate-500 font-medium">
                        <ShieldCheck size={14} className="text-green-600" />
                        <span>Seat securely approved. Welcome onboard!</span>
                      </div>
                    </div>

                    {/* Interactive buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-1.5">
                      <button
                        onClick={downloadReceipt}
                        className="w-full sm:flex-1 bg-slate-800 hover:bg-slate-700 text-white font-extrabold py-2.5 rounded-lg text-xs cursor-pointer hover:shadow-md transition-all flex items-center justify-center gap-2 group"
                      >
                        <Download size={15} className="group-hover:translate-y-0.5 transition-transform" />
                        <span>Download Official Receipt (.TXT)</span>
                      </button>

                      <button
                        onClick={resetForm}
                        className="w-full sm:w-auto bg-[#e41e3d] hover:bg-[#c91833] text-white font-extrabold py-2.5 px-8 rounded-lg text-xs cursor-pointer hover:shadow-md hover:scale-101 active:scale-99 transition-all text-center"
                      >
                        Complete Onboarding
                      </button>
                    </div>

                    <p className="text-[10px] text-center text-slate-400 font-medium">
                      A copy of the invoice token has been dispatched to <strong className="text-slate-500 font-semibold">{formData.email}</strong>. Counseling onboarding support commences within 24 working hours.
                    </p>
                  </motion.div>
                )}

              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
