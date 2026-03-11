'use client';

import Image from "next/image";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Logo } from "@/components/logo";
import {
  BadgeCheck,
  BookOpen,
  CheckCircle,
  Clock,
  Package,
  Rocket,
  Sparkles,
  Trophy,
} from "lucide-react";
import Countdown from "@/components/countdown";
import { UpsellModal } from "@/components/upsell-modal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SocialProofPopup from "@/components/social-proof-popup";
import { cn } from "@/lib/utils";

const findImage = (id: string) => {
  const img = PlaceHolderImages.find((img) => img.id === id);
  if (!img) {
    return { imageUrl: "https://picsum.photos/seed/error/600/400", imageHint: "placeholder", description: "" };
  }
  return img;
};

const benefits = [
  {
    icon: <BookOpen className="h-5 w-5 text-primary" />,
    title: "+ de 47 Modelos Prontos e Editáveis",
    description: "Receba + de 47 modelos de PEI prontos, personalizáveis e adaptáveis às suas necessidades, economizando tempo na criação de documentos.",
  },
  {
    icon: <Clock className="h-5 w-5 text-primary" />,
    title: "Economize Horas de Trabalho",
    description: "Com os modelos prontos, você elimina a burocracia e ganha mais tempo para ensinar e se dedicar aos alunos.",
  },
  {
    icon: <BadgeCheck className="h-5 w-5 text-primary" />,
    title: "Aprovado pela Coordenação",
    description: "Cada modelo é criado por especialistas, garantindo conformidade com os critérios educacionais para mais segurança no seu trabalho.",
  },
  {
    icon: <Rocket className="h-5 w-5 text-primary" />,
    title: "Atualizações e Adaptações Simples",
    description: "Os modelos são editáveis, permitindo ajustes rápidos sem perder a qualidade ou o formato profissional.",
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
    title: "Plano Educacional PEI 4 e 5 Anos",
    description: "Plano Educacional para alunos de 4 e 5 anos na Educação Infantil, histórico escolar, saúde e desenvolvimento do aluno.",
  },
  {
    id: "bonus-bncc",
    title: "Plano de Desenvolvimento Psicoeducacional (PDPI)",
    description: "Um guia desenvolvido com estratégias, acompanhamento e planejamento psicoeducacional, com o objetivo de apoiar o desenvolvimento e a aprendizagem de alunos com deficiência intelectual.",
  },
  {
    id: "bonus-relatorios-descritivos",
    title: "Planejamento AEE 2026: Sala Multifuncional",
    description: "Um guia planejado para o Atendimento Educacional Especializado (AEE) na Sala de Recurso Multifuncional para o ano de 2026, destacando a importância da inclusão e a individualização do atendimento a alunos com necessidades especiais.",
  },
  {
    id: "bonus-planners",
    title: "Ficha Individual de Acompanhamento Do Aluno PEI",
    description: "Ficha de acompanhamento para alunos com necessidades educacionais especiais. A ficha coleta dados sobre o aluno e avalia suas habilidades em áreas como psicomotricidade, cognição e memória para identificar desafios e orientar intervenções educacionais.",
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

const carouselImages = ["carousel-1", "carousel-2", "carousel-3", "carousel-4", "carousel-5"].map(id => findImage(id));

export default function Home() {
  const [isUpsellModalOpen, setIsUpsellModalOpen] = useState(false);
  const heroImage = findImage("hero-image");
  const planoProImage = findImage("plano-pro-image");
  const planoBasicoImage = findImage("plano-basico-image");
  const guaranteeImage = findImage("guarantee-seal");
  const creatorImage = findImage("creator-persona");

  const bonusCardColors = [
    "bg-chart-1/20",
    "bg-chart-2/20",
    "bg-chart-4/20",
    "bg-accent/10",
    "bg-primary/10",
    "bg-chart-5/20",
  ];

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
              Dê adeus a dificuldade em elaborar seu PEI! Aqui temos modelos <span className="text-primary">PRONTOS E EDITÁVEIS!</span>
            </h2>
            <p className="mt-4 text-sm text-muted-foreground max-w-2xl mx-auto">
              Com nossos mais de 47 modelos 100% editáveis, planejados por profissionais da educação. Você entrega resultados perfeitos, ganha tempo e impressiona coordenadores e pais. Além de serem 100% editáveis você consegue Adaptar para QUALQUER TURMA.
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
            <h3 className="text-[25px] font-bold text-center font-headline mb-12">
              Benefícios <span className="text-primary">Exclusivos</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
              <h3 className="text-[25px] font-bold font-headline">
                Você Merece mais <span className="text-accent">Bônus Exclusivos</span>!
              </h3>
              <p className="text-[13px] text-muted-foreground mt-2 max-w-2xl mx-auto">
                Ao adquirir o Plano Pro, você recebe acesso imediato a bônus incríveis que transformarão sua forma de trabalhar, garantindo mais tempo para ensinar e mais respeito da coordenação.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-sm mx-auto md:max-w-4xl">
              {bonuses.map((bonus, index) => {
                const bonusImage = findImage(bonus.id);
                return (
                  <Card key={bonus.id} className={cn(
                    "h-full overflow-hidden flex flex-col text-center rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300",
                    bonusCardColors[index]
                  )}>
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
                      <CardTitle className="text-sm">{bonus.title}</CardTitle>
                      <CardDescription className="text-xs mt-1">{bonus.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex-col justify-center p-4 pt-0">
                      <p className="text-base font-semibold line-through text-muted-foreground">R$47,00</p>
                      <p className="text-lg font-bold text-chart-2 [text-shadow:0_0_8px_hsl(var(--chart-2)/0.5)]">GRÁTIS</p>
                    </CardFooter>
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
              Quem adquire nossos materiais, <span className="text-[#705cd6]">RECOMENDA!</span>
            </h3>
            <Carousel
              opts={{
                loop: true,
              }}
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
                          className="w-full aspect-square object-contain"
                          data-ai-hint={img.imageHint}
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <h3 className="text-[23px] font-bold text-center font-headline mb-4">
              Desbloqueie Soluções Prontas<span className="text-[#705cd6]"> para Seu Ensino!</span>
            </h3>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-[14px]">
              Aproveite agora os planos exclusivos e tenha PEIs prontos para otimizar seu tempo, melhorar sua performance e impressionar sua coordenação.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-md mx-auto items-end">
              {/* Plano Básico */}
              <Card className="shadow-2xl flex flex-col border-4 border-primary ring-8 ring-primary/25 relative bg-background">
                <CardHeader className="text-center pt-2 pb-2">
                  <Package className="h-6 w-6 text-primary mb-1 mx-auto" />
                  <CardTitle className="font-headline text-lg">Plano Básico</CardTitle>
                  <CardDescription className="text-xs">O essencial para começar a planejar.</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow p-4">
                  <div className="text-center my-2">
                    <span className="text-6xl font-bold">R$10</span>
                    <span className="text-3xl font-bold">,00</span>
                    <p className="text-xs text-muted-foreground">Pagamento único</p>
                  </div>
                  <div className="px-4 mb-3">
                    <Image
                      src={planoBasicoImage.imageUrl}
                      alt={planoBasicoImage.description}
                      width={400}
                      height={400}
                      className="mx-auto w-full max-w-[320px] h-auto rounded-lg shadow-md"
                      data-ai-hint={planoBasicoImage.imageHint}
                    />
                  </div>
                  <ul className="space-y-1 text-xs">
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" /> <span><span className="font-bold">47 Modelos</span> de PEI prontos e editáveis</span></li>
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" /> <span>Acesso aos modelos fundamentais</span></li>
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" /> <span>Relatórios AEE</span></li>
                  </ul>
                </CardContent>
                <CardFooter className="p-4">
                  <Button 
                    size="sm" 
                    className="w-full font-semibold animate-pulse-ring"
                    onMouseDown={() => setIsUpsellModalOpen(true)}
                  >
                    Liberar Acesso!
                  </Button>
                </CardFooter>
              </Card>

              {/* Plano Pro */}
              <Card className="shadow-2xl flex flex-col border-4 border-accent ring-8 ring-accent/25 relative bg-background">
                <div className="absolute top-0 -translate-y-1/2 w-full flex justify-center">
                    <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                        ESCOLHA DOS PROFISSIONAIS ⭐
                    </div>
                </div>
                <CardHeader className="text-center pt-6 pb-2">
                  <Trophy className="h-6 w-6 text-primary mb-1 mx-auto" />
                  <CardTitle className="font-headline text-lg">Plano PRO</CardTitle>
                  <CardDescription className="text-xs">Todos PEI prontos e editáveis!</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow p-4">
                <div className="text-center my-2">
                    <span className="text-6xl font-bold">R$15</span>
                    <span className="text-3xl font-bold">,90</span>
                    <p className="text-xs text-muted-foreground">Pagamento único</p>
                  </div>
                  <div className="px-4 mb-3">
                    <Image
                      src={planoProImage.imageUrl}
                      alt={planoProImage.description}
                      width={400}
                      height={400}
                      className="mx-auto w-full max-w-[320px] h-auto rounded-lg shadow-md"
                      data-ai-hint={planoProImage.imageHint}
                    />
                  </div>
                  <ul className="space-y-1 text-xs">
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" /> <span>Tudo do Plano Básico e <span className="font-bold">MUITO</span> mais!</span></li>
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" /> <span><span className="font-bold">6 Bônus</span> (Autismo, Relatórios e Ativ. Motoras) 🎁</span></li>
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" /> <span><span className="font-bold">Combo Ed. Especial</span> com materiais extras</span></li>
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" /> <span><span className="font-bold">PEI Autismo Ed. Infantil</span></span></li>
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" /> <span>Relatórios AEE</span></li>
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" /> <span>PEI para deficiências múltiplas</span></li>
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" /> <span>Acesso a <span className="font-bold">futuras atualizações</span></span></li>
                  </ul>
                </CardContent>
                <CardFooter className="flex-col p-4">
                  <Button 
                    size="sm" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold animate-pulse-ring-accent"
                    onMouseDown={() => window.location.href = 'https://pay.wiapy.com/VBXdX_ymda'}
                  >
                    Liberar Acesso!
                  </Button>
                  <p className="mt-2 text-center text-xs font-semibold text-muted-foreground">
                    APROVEITE AGORA: Você <span className="font-bold text-accent underline">NÃO</span> vai encontrar esse preço depois.
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Creator Section */}
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left gap-8 p-8 bg-card rounded-2xl shadow-lg border-t-4 border-accent">
              <div className="flex-shrink-0">
                <Image
                  src={creatorImage.imageUrl}
                  alt={creatorImage.description}
                  width={250}
                  height={250}
                  className="rounded-full object-cover w-40 h-40 md:w-52 md:h-52 shadow-lg border-4 border-pink-400"
                  data-ai-hint={creatorImage.imageHint}
                />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold font-headline mb-3 text-primary">
                  Uma Professora que te Entende
                </h3>
                <p className="text-foreground/90 text-sm italic mb-4">
                  "Eu sei como é virar noites planejando. Criei estes modelos para que você tenha mais tempo para o que realmente importa: seus alunos."
                </p>
                <p className="text-muted-foreground text-sm">
                  Com mais de 10 anos de experiência em educação inclusiva, a <span className="font-bold text-foreground">Professora Luciana</span> sentiu na pele a dificuldade de criar planos individualizados eficientes sem sacrificar seu tempo pessoal. Foi por isso que ela desenvolveu este material: um atalho prático, aprovado e, acima de tudo, lúdico para transformar suas aulas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-xl font-bold text-center font-headline">
              Não leu tudo? <span className="text-primary">Vamos resumir para você...</span>
            </h3>
            <div className="mt-6 bg-primary/5 border-2 border-primary/20 rounded-2xl p-6 max-w-3xl mx-auto">
              <p className="text-center text-foreground text-sm">
                Você terá acesso imediato a um conjunto de materiais e bônus imersivos e práticos, pensado por professores para professores e educadores! São + de 47 modelos de PEI prontos e editáveis, planejados para inclusão, relatórios e adaptações, para que você domine sua rotina pedagógica sem esforço.
              </p>
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

        {/* Guarantee Section */}
        <section className="py-12 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left gap-8 p-8 bg-background rounded-2xl shadow-lg border">
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

        {/* Checkout Info Section */}
        <section className="py-12 md:py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto">
              <Image
                src="https://i.ibb.co/HD6qqYhj/CHECKOUT-INFO-V2.png"
                alt="Informações de checkout seguro com formas de pagamento"
                width={1440}
                height={353}
                className="w-full rounded-lg shadow-lg"
              />
              <Image
                src="https://i.ibb.co/jZHyvMWB/BANDEIRAS-CHECKOUT-V2.png"
                alt="Bandeiras dos cartões de crédito aceitos"
                width={1440}
                height={150}
                className="w-full rounded-lg shadow-lg mt-4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-background">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-background/90">Copyright & Direitos Autorais</p>
            <p className="text-xs text-background/60 mt-2">
              © 2026 ESCOLA AUTOAJUDA. Todos os direitos reservados. Este produto, incluindo todos os seus conteúdos, modelos, materiais e recursos, é protegido pelas leis de direitos autorais e outras leis de propriedade intelectual. Nenhuma parte deste produto pode ser copiada, distribuída, alterada, modificada, vendida, licenciada ou reproduzida de qualquer forma, sem a permissão expressa por escrito de ESCOLA AUTOAJUDA.
            </p>
          </div>
        </div>
      </footer>
      <UpsellModal open={isUpsellModalOpen} onOpenChange={setIsUpsellModalOpen} />
      <SocialProofPopup />
    </div>
  );
}
