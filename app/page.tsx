import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TrustBar } from '@/components/TrustBar';
import { Beneficios } from '@/components/Beneficios';
import { Assistencias } from '@/components/Assistencias';
import { ComoFunciona } from '@/components/ComoFunciona';
import { ProvaSocial } from '@/components/ProvaSocial';
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
        <TrustBar />
        <Beneficios />
        <Assistencias />
        <ComoFunciona />
        <ProvaSocial />
        <Planos />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
