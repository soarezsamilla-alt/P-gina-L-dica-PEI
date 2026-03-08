'use client';

import Image from "next/image";
import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Logo } from "@/components/logo";
import {
  BookOpen,
  CheckCircle,
  Clock,
  Package,
  Rocket,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import Countdown from "@/components/countdown";
import { UpsellModal } from "@/components/upsell-modal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SocialProofPopup from "@/components/social-proof-popup";

const findImage = (id: string) => {
  const img = PlaceHolderImages.find((img) => img.id === id);
  if (!img) {
    return { imageUrl: "https://picsum.photos/seed/error/600/400", imageHint: "placeholder", description: "" };
  }
  return img;
};

const benefits = [
  {
    icon: <Rocket className="h-5 w-5 text-primary" />,
    title: "Prontidão e Diversão",
    description: "Nossos modelos de PEI estão prontos e são fáceis de adaptar para cada aluno, agilizando seu planejamento.",
  },
  {
    icon: <Sparkles className="h-5 w-5 text-primary" />,
    title: "Ensinar de forma lúdica",
    description: "Transforme a criação do PEI em algo lúdico. Nossas ilustrações e atividades tornam o aprendizado mais envolvente.",
  },
  {
    icon: <Clock className="h-5 w-5 text-primary" />,
    title: "Economize seu tempo",
    description: "Passe menos tempo elaborando o PEI e mais tempo ensinando. Nossos modelos prontos otimizam sua rotina.",
  },
  {
    icon: <Users className="h-5 w-5 text-primary" />,
    title: "Adaptabilidade para Todos",
    description: "Modelos de PEI flexíveis para sala de aula, ensino remoto ou atendimentos individuais. Adapte para qualquer necessidade.",
  },
  {
    icon: <BookOpen className="h-5 w-5 text-primary" />,
    title: "Material Completo de PEI",
    description: "Tenha em mãos um material de PEI completo, com relatórios, planejamentos e atividades que facilitam seu dia a dia.",
  },
];

const bonuses = [
  {
    id: "ebook-autismo",
    title: "Plano Educacional PEI",
    description: "Um guia completo com apoio individualizado e estratégias de atividades adaptadas.",
  },
  {
    id: "ebook-relatorios",
    title: "Plano de Desenvolvimento PDI e PEI",
    description: "Plano de desenvolvimento individual focado na aprendizagen e inclusão de alunos PDI e PEI.",
  },
  {
    id: "ebook-motoras",
    title: "PEI Para Educação Infantil",
    description: "Plano Educacional para alunos de 4 e 5 anos na Educação Infantil, histórico escolar, saúde e desenvolvimento do aluno.",
  },
];

const testimonials = [
  {
    name: "Maria, Professora Infantil",
    avatar: findImage("testimonial-maria"),
    text: "Esses modelos são maravilhosos! As crianças adoram as atividades e eu economizo muito tempo na preparação!",
  },
  {
    name: "João, Professor de Educação Especial",
    avatar: findImage("testimonial-joao"),
    text: "Amei o material! Fácil de usar, colorido e cheio de ideias legais. Meus alunos estão adorando!",
  },
  {
    name: "Ana, Pedagoga",
    avatar: findImage("testimonial-ana"),
    text: "Um recurso fantástico que transformou minha rotina. A adaptabilidade dos modelos é um grande diferencial.",
  },
  {
    name: "Recomendação de Cliente",
    avatar: findImage("testimonial-4"),
    text: "Mais um cliente satisfeito com nossos materiais!",
  },
];

const carouselImages = ["carousel-1", "carousel-2", "carousel-3", "carousel-4"].map(id => findImage(id));

export default function Home() {
  const [isUpsellModalOpen, setIsUpsellModalOpen] = useState(false);
  const heroImage = findImage("hero-image");
  const planoProImage = findImage("plano-pro-image");
  const planoBasicoImage = findImage("plano-basico-image");
  const guaranteeImage = findImage("guarantee-seal");

  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-50 w-full text-center py-1 bg-background/95 backdrop-blur-sm">
        <Countdown />
      </div>
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 text-center">
            
            <h2 className="text-[23px] font-bold font-headline tracking-tighter max-w-3xl mx-auto mt-6">
              Dê adeus a dificuldade em elaborar seu PEI! Aqui temos modelos <span className="text-primary">PRONTOS E EDITÁVEIS</span>!
            </h2>
            <p className="mt-4 text-sm text-muted-foreground max-w-2xl mx-auto">
              No arquivo contém 47 modelos, planejados por profissionais da educação. Servem para fundamental I e II. Mas como são editáveis você consegue Adaptar para OUTRAS TURMAS também.
            </p>
            <div className="mt-12 rounded-xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={1200}
                height={800}
                className="w-full"
                data-ai-hint={heroImage.imageHint}
                priority
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <h3 className="text-[23px] font-bold text-center font-headline mb-12">
              Benefícios <span className="text-primary">Exclusivos</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex flex-col items-center text-center p-3 bg-background rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <div className="bg-primary/10 p-2 rounded-full mb-3">
                    {benefit.icon}
                  </div>
                  <h4 className="text-base font-bold mb-2">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bonuses Section */}
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-[23px] font-bold font-headline">
                Tenho 3 presentes <span className="text-accent">extras para Você!</span>
              </h3>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Ao adquirir Plano Pro, você recebe acesso instantâneo a estes materiais incríveis para complementar suas aulas.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-sm mx-auto md:max-w-5xl">
              {bonuses.map((bonus, index) => {
                const bonusImage = findImage(bonus.id);
                return (
                  <Card key={bonus.id} className="overflow-hidden flex flex-col text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <CardContent className="p-0 relative">
                      <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-10 transform transition-transform duration-300 hover:scale-110">
                        {`Bônus ${index + 1}º`}
                      </div>
                      <Image
                        src={bonusImage.imageUrl}
                        alt={bonusImage.description}
                        width={400}
                        height={600}
                        className="w-full h-auto object-cover"
                        data-ai-hint={bonusImage.imageHint}
                      />
                    </CardContent>
                    <CardHeader className="flex-grow p-4">
                      <CardTitle className="text-base">{bonus.title}</CardTitle>
                      <CardDescription className="text-xs mt-1">{bonus.description}</CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <h3 className="text-[23px] font-bold text-center font-headline mb-12">
              Quem adquire nossos materiais, <span className="text-primary">RECOMENDA!</span>
            </h3>
            <Carousel
              opts={{
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true,
                }),
              ]}
              className="w-full max-w-sm mx-auto"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        <Image
                          src={testimonial.avatar.imageUrl}
                          alt={testimonial.name}
                          width={600}
                          height={600}
                          className="w-full aspect-square object-cover"
                          data-ai-hint={testimonial.avatar.imageHint}
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="transform hover:scale-110 transition-transform -left-4 md:-left-12 h-10 w-10 bg-primary text-primary-foreground shadow-lg" />
              <CarouselNext className="transform hover:scale-110 transition-transform -right-4 md:-right-12 h-10 w-10 bg-primary text-primary-foreground shadow-lg" />
            </Carousel>
          </div>
        </section>

        {/* Samples Carousel Section */}
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4">
            <h3 className="text-[23px] font-bold text-center font-headline mb-4">
              Veja abaixo algumas amostras!
            </h3>
            <p className="text-center text-sm text-muted-foreground mb-12 max-w-2xl mx-auto">
              Nossos modelos de PEI são feitos para tornar o ensino mais divertido e interativo!
            </p>
            <Carousel
              opts={{ loop: true }}
              plugins={[
                Autoplay({
                  delay: 2000,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true,
                }),
              ]}
              className="w-full max-w-sm mx-auto"
            >
              <CarouselContent>
                {carouselImages.map((img, index) => (
                  <CarouselItem key={index}>
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        <Image
                          src={img.imageUrl}
                          alt={img.description}
                          width={600}
                          height={600}
                          className="w-full aspect-square object-cover"
                          data-ai-hint={img.imageHint}
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="transform hover:scale-110 transition-transform -left-4 md:-left-12 h-10 w-10 bg-primary text-primary-foreground shadow-lg" />
              <CarouselNext className="transform hover:scale-110 transition-transform -right-4 md:-right-12 h-10 w-10 bg-primary text-primary-foreground shadow-lg" />
            </Carousel>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-center font-headline mb-4">
              Desbloqueie a <span className="text-primary">Magia do Ensino</span>!
            </h3>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Garanta agora os melhores modelos de PEI e otimize seu tempo!
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto items-end">
              {/* Plano Básico */}
              <Card className="shadow-lg flex flex-col pt-6">
                <CardHeader className="text-center">
                  <Package className="h-10 w-10 text-primary mb-2 mx-auto" />
                  <CardTitle className="font-headline text-3xl">Plano Básico</CardTitle>
                  <CardDescription>O essencial para começar a planejar.</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center my-6">
                    <span className="text-5xl font-bold">R$15</span>
                    <span className="text-2xl font-bold">,90</span>
                    <p className="text-sm text-muted-foreground">Pagamento único</p>
                  </div>
                  <div className="px-6 mb-4">
                    <Image
                      src="https://image2url.com/r2/default/images/1772577587419-9b514119-5771-40ab-88e5-952205b5e3e8.png"
                      alt="Formas de pagamento"
                      width={500}
                      height={95}
                      className="mx-auto"
                    />
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-accent mr-2 mt-1 flex-shrink-0" /> <span><span className="font-bold">47 Modelos</span> de PEI prontos e editáveis</span></li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-accent mr-2 mt-1 flex-shrink-0" /> <span>Acesso aos modelos fundamentais</span></li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-accent mr-2 mt-1 flex-shrink-0" /> <span>Relatórios AEE</span></li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    size="lg" 
                    className="w-full text-lg h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold animate-pulse-ring"
                    onClick={() => window.location.href='https://pay.hotmart.com/S104769144S?checkoutMode=10'}
                  >
                    Liberar Acesso!
                  </Button>
                </CardFooter>
              </Card>

              {/* Plano Pro */}
              <Card className="shadow-2xl flex flex-col border-2 border-primary ring-4 ring-primary/20 relative">
                <div className="absolute top-0 -translate-y-1/2 w-full flex justify-center">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                        MAIS VENDIDO ⭐
                    </div>
                </div>
                <CardHeader className="text-center pt-10">
                  <Trophy className="h-10 w-10 text-primary mb-2 mx-auto" />
                  <CardTitle className="font-headline text-3xl">Plano PRO</CardTitle>
                  <CardDescription>Todos PEI prontos e editáveis!</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                <div className="text-center my-6">
                    <span className="text-5xl font-bold">R$18</span>
                    <span className="text-2xl font-bold">,90</span>
                    <p className="text-sm text-muted-foreground">Pagamento único</p>
                  </div>
                  <div className="px-6 mb-4">
                    <Image
                      src="https://image2url.com/r2/default/images/1772578007538-e541252d-0988-4cf6-b537-fc15dc1b6eb0.png"
                      alt="Formas de pagamento"
                      width={500}
                      height={95}
                      className="mx-auto"
                    />
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-accent mr-2 mt-1 flex-shrink-0" /> <span>Tudo do Plano Básico e <span className="font-bold">MUITO</span> mais!</span></li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-accent mr-2 mt-1 flex-shrink-0" /> <span><span className="font-bold">3 Bônus</span> (Autismo, Relatórios e Ativ. Motoras) 🎁</span></li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-accent mr-2 mt-1 flex-shrink-0" /> <span><span className="font-bold">Combo Ed. Especial</span> com materiais extras</span></li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-accent mr-2 mt-1 flex-shrink-0" /> <span><span className="font-bold">PEI Autismo Ed. Infantil</span></span></li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-accent mr-2 mt-1 flex-shrink-0" /> <span>Relatórios AEE</span></li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-accent mr-2 mt-1 flex-shrink-0" /> <span>PEI para deficiências múltiplas</span></li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-accent mr-2 mt-1 flex-shrink-0" /> <span>Acesso a <span className="font-bold">futuras atualizações</span></span></li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    size="lg" 
                    className="w-full text-lg h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold animate-pulse-ring"
                    onClick={() => window.location.href='https://pay.hotmart.com/L104768807K?checkoutMode=10'}
                  >
                    Liberar Acesso!
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left gap-8 p-8 bg-card rounded-2xl shadow-lg border">
              <div className="flex-shrink-0">
                <Image
                  src={guaranteeImage.imageUrl}
                  alt={guaranteeImage.description}
                  width={200}
                  height={200}
                  className="w-36 h-36 md:w-44 md:h-44"
                  data-ai-hint={guaranteeImage.imageHint}
                />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold font-headline mb-4">
                  Garantia Incondicional de 7 Dias
                </h3>
                <p className="text-muted-foreground text-sm">
                  Sua satisfação é nossa prioridade. Se por qualquer motivo você achar que nosso material não é para você, basta nos enviar um único e-mail dentro de 7 dias e devolveremos <span className="font-bold text-primary">100% do seu investimento</span>. Sem perguntas, sem burocracia. O risco é todo nosso!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold font-headline">
                Ainda tem <span className="text-primary">Dúvidas?</span>
              </h3>
              <p className="text-muted-foreground mt-4">
                Confira as respostas para as perguntas mais comuns sobre nossos materiais.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-bold">O que significa PEI?</AccordionTrigger>
                  <AccordionContent>
                    PEI é a sigla para Plano Educacional Individualizado. É um documento que detalha os objetivos, as estratégias e os recursos pedagógicos para atender às necessidades específicas de cada aluno, especialmente os da educação especial. Nossos modelos facilitam a criação desse plano de forma lúdica e eficiente.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-bold">Os modelos são editáveis?</AccordionTrigger>
                  <AccordionContent>
                    Sim! Todos os 47 modelos são 100% editáveis no Word. Você pode personalizar textos, imagens e atividades para se adequar perfeitamente ao perfil e às necessidades de cada um dos seus alunos.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-bold">Para qual faixa etária são os modelos?</AccordionTrigger>
                  <AccordionContent>
                    Nossos modelos são voltados para o Ensino Fundamental I e II. No entanto, por serem totalmente editáveis, eles podem ser facilmente adaptados para outras turmas e níveis, como a Educação Infantil.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-bold">Como receberei o material após a compra?</AccordionTrigger>
                  <AccordionContent>
                    O acesso é imediato! Assim que seu pagamento for confirmado, você receberá um e-mail com todas as instruções e o link para baixar o material completo. Compras via PIX ou Cartão de Crédito têm liberação instantânea.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left font-bold">A compra é segura?</AccordionTrigger>
                  <AccordionContent>
                    Com certeza! Nossa transação é processada por uma das maiores plataformas de pagamentos do Brasil, garantindo total segurança e proteção dos seus dados. Além disso, oferecemos a garantia de 7 dias para sua tranquilidade.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-background">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Página Lúdica PEI. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
      <UpsellModal open={isUpsellModalOpen} onOpenChange={setIsUpsellModalOpen} />
      <SocialProofPopup />
    </div>
  );
}

    