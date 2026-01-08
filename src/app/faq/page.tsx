import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function FAQ() {
  const faqs = [
    {
      question: "What is Topology's main focus?",
      answer: "Topology specializes in eco-friendly technologies, organic design, and tech-aesthetics. Our mission is to develop sustainable tech solutions that seamlessly blend with the natural world while maintaining high performance and aesthetic appeal. We focus on reducing environmental impact through innovation and thoughtful design."
    },
    {
      question: "Which payment methods are accepted in the Online Shop?",
      answer: "We accept various payment methods including credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. All transactions are secured with SSL encryption to ensure your payment information is protected."
    },
    {
      question: "How does Topology ensure its products are eco-friendly?",
      answer: "We use sustainable materials like PLA plastic derived from renewable resources, minimize waste through optimized 3D printing, and design products for longevity. Our manufacturing process is energy-efficient, and we continuously research new eco-friendly materials and methods."
    },
    {
      question: "What does \"organic design\" mean at Topology?",
      answer: "Organic design at Topology refers to our approach of drawing inspiration from natural forms and patterns. We use topology optimization to create structures that mimic nature's efficiency - lightweight yet strong, with flowing curves and patterns that reflect biological systems. This results in products that are both functional and visually harmonious with natural environments."
    },
    {
      question: "How secure is shopping in the Online Shop? Is my data protected?",
      answer: "Your security is our priority. We use industry-standard SSL encryption for all transactions, comply with GDPR regulations, and never store sensitive payment information on our servers. Our payment processing is handled by trusted, PCI-compliant partners. We also regularly update our security measures to protect your personal data."
    },
    {
      question: "What types of products or services does Topology offer?",
      answer: "Topology offers 3D-printed wall shelves in various materials including PLA plastic, carbon fiber reinforced filament, and metal (sinter steel). Each product combines cutting-edge 3D printing technology with organic, topology-optimized designs. We also offer custom design services for unique projects."
    },
    {
      question: "Can you explain \"tech-aesthetics\"?",
      answer: "Tech-aesthetics is our philosophy of making technology beautiful and seamlessly integrated into living spaces. Instead of hiding technology or making it purely functional, we celebrate its form through artistic design. Our products showcase the manufacturing process and structural optimization as part of their aesthetic appeal, making technology an elegant element of interior design."
    },
    {
      question: "Who are your products designed for?",
      answer: "Our products are designed for environmentally-conscious individuals who appreciate modern design, innovation, and sustainability. They're perfect for tech enthusiasts, design lovers, early adopters, and anyone who wants to add unique, conversation-starting pieces to their space while supporting eco-friendly practices."
    },
    {
      question: "How does Topology's technology reduce energy consumption?",
      answer: "Our 3D printing technology is energy-efficient compared to traditional manufacturing. We produce on-demand, eliminating waste from overproduction. The topology optimization process reduces material usage while maintaining strength, which means less energy for production and transportation. Additionally, our lightweight designs require less energy to ship and install."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f0eb]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-[#d4a574]/95 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-8">
              <a href="/" className="flex items-center gap-2">
                <Image src="/logo.png" alt="Topology" width={120} height={40} className="h-auto" />
              </a>
              <div className="hidden lg:flex gap-8">
                <a href="/#about" className="text-sm font-medium text-white hover:text-white/80 transition-colors uppercase">O NAS</a>
                <a href="/#products" className="text-sm font-medium text-white hover:text-white/80 transition-colors uppercase">PRODUKTY</a>
                <a href="/faq" className="text-sm font-medium text-white hover:text-white/80 transition-colors uppercase">FAQ</a>
                <a href="/#contact" className="text-sm font-medium text-white hover:text-white/80 transition-colors uppercase">KONTAKT</a>
                <a href="/privacy" className="text-sm font-medium text-white hover:text-white/80 transition-colors uppercase">PRYWATNOŚĆ</a>
                <a href="/terms" className="text-sm font-medium text-white hover:text-white/80 transition-colors uppercase">REGULAMIN</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#e8c4a0] via-[#d4a574] to-[#c9a68a]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Find answers to common questions about Topology, our products, and services
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#e8895f] transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2025 Topology by Karol Sapiolko. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
