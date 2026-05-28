import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Beneficios } from '@/components/Beneficios';
import { ProvaSocial } from '@/components/ProvaSocial';
import { Diferenciais } from '@/components/Diferenciais';
import { ComoFunciona } from '@/components/ComoFunciona';
import { Planos } from '@/components/Planos';
import { FAQ } from '@/components/FAQ';
import { CTAFinal } from '@/components/CTAFinal';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Beneficios />
        <ProvaSocial />
        <Diferenciais />
        <ComoFunciona />
        <Planos />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
