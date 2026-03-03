
import Image from "next/image";
import Link from "next/link";
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
  Facebook,
  Instagram,
  Package,
  PackagePlus,
  Rocket,
  Sparkles,
  Trophy,
  Users,
  Youtube,
} from "lucide-react";
import Chatbot from "@/components/chatbot";

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
    description: "Modelos prontos que podem ser facilmente adaptados para diferentes crianças e situações.",
  },
  {
    icon: <Sparkles className="h-5 w-5 text-primary" />,
    title: "Ensinar de forma lúdica",
    description: "Com ilustrações coloridas e atividades divertidas, ensinar será um momento de aprendizado feliz.",
  },
  {
    icon: <Clock className="h-5 w-5 text-primary" />,
    title: "Economize tempo para brincar",
    description: "Deixe de lado a elaboração difícil e tenha mais tempo para brincar e ensinar!",
  },
  {
    icon: <Users className="h-5 w-5 text-primary" />,
    title: "Adaptabilidade para Todos",
    description: "Perfeito para atividades em sala de aula ou ensino remoto, adaptável para todos os tipos de alunos.",
  },
  {
    icon: <BookOpen className="h-5 w-5 text-primary" />,
    title: "Suporte Completo para Professores",
    description: "Modelos que vêm com tudo que você precisa, desde relatórios até atividades divertidas!",
  },
];

const bonuses = [
  {
    id: "ebook-autismo",
    title: "E-book: PEI para Autismo",
    description: "Um guia completo com estratégias e atividades adaptadas.",
  },
  {
    id: "ebook-relatorios",
    title: "E-book: Relatórios para AEE",
    description: "Modelos e dicas para criar relatórios descritivos eficientes.",
  },
  {
    id: "ebook-motoras",
    title: "E-book: Atividades Motoras",
    description: "Ideias práticas para desenvolver a coordenação motora.",
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
];

const carouselImages = ["carousel-1", "carousel-2", "carousel-3"].map(id => findImage(id));

export default function Home() {
  const heroImage = findImage("hero-image");
  const planoProImage = findImage("plano-pro-image");
  const planoBasicoImage = findImage("plano-basico-image");

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-[23px] font-bold font-headline tracking-tighter max-w-3xl mx-auto">
              Dê adeus a dificuldade em elaborar seu PEI! Aqui temos modelos <span className="text-primary">PRONTOS E EDITÁVEIS</span>!
            </h2>
            <p className="mt-4 text-sm text-muted-foreground max-w-2xl mx-auto">
              No arquivo contém 47 modelos, planejados por profissionais da educação. Servem para fundamental I e II. Mas como são editáveis você consegue Adaptar para OUTRAS TURMAS também.
            </p>
            <div className="mt-12 rounded-xl shadow-2xl overflow-hidden max-w-[250px] mx-auto">
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
                E ainda tem <span className="text-accent">3 E-books de Bônus</span>!
              </h3>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Ao adquirir qualquer plano, você recebe acesso instantâneo a estes materiais incríveis para complementar suas aulas.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-sm mx-auto">
              {bonuses.map((bonus) => {
                const bonusImage = findImage(bonus.id);
                return (
                  <Card key={bonus.id} className="overflow-hidden flex flex-col text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <CardContent className="p-0">
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
            <h3 className="text-3xl md:text-4xl font-bold text-center font-headline mb-4">
              Desbloqueie a <span className="text-primary">Magia do Ensino</span>!
            </h3>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Escolha o plano perfeito para você e transforme a maneira de ensinar e brincar.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto items-end">
              {/* Plano Básico */}
              <Card className="bg-card-basico shadow-lg flex flex-col pt-6 text-foreground">
                <CardHeader className="text-center">
                  <Package className="h-10 w-10 text-primary mb-2 mx-auto" />
                  <CardTitle className="font-headline text-2xl">Plano Básico</CardTitle>
                  <CardDescription className="text-foreground/90">O essencial para começar a planejar.</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center my-6">
                    <span className="text-4xl font-bold">R$15</span>
                    <span className="text-xl font-bold">,90</span>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-accent mr-2 mt-1 flex-shrink-0" /> <span><span className="font-bold">47 Modelos</span> de PEI prontos e editáveis</span></li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-accent mr-2 mt-1 flex-shrink-0" /> <span>Acesso aos modelos fundamentais</span></li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="lg" className="w-full text-base h-12">
                    ADQUIRIR AGORA!
                  </Button>
                </CardFooter>
              </Card>

              {/* Plano Pro */}
              <Card className="bg-[#60a7f7] shadow-2xl flex flex-col border-2 border-primary ring-4 ring-primary/20 relative text-white">
                <div className="absolute top-0 -translate-y-1/2 w-full flex justify-center">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                        MAIS VENDIDO ⭐
                    </div>
                </div>
                <CardHeader className="text-center pt-10">
                  <Trophy className="h-10 w-10 text-primary mb-2 mx-auto" />
                  <CardTitle className="font-headline text-3xl">Plano PRO</CardTitle>
                  <CardDescription className="text-white/90">A experiência completa para inovar! 🚀</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                <div className="text-center my-6">
                    <span className="text-5xl font-bold">R$18</span>
                    <span className="text-2xl font-bold">,90</span>
                    <p className="text-sm text-white/80">Pagamento único</p>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" /> <span>Tudo do Plano Básico e <span className="font-bold">MUITO</span> mais!</span></li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" /> <span><span className="font-bold">3 E-books Bônus</span> (Autismo, Relatórios e Ativ. Motoras) 🎁</span></li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" /> <span><span className="font-bold">Combo Ed. Especial</span> com materiais extras</span></li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" /> <span>Acesso a <span className="font-bold">futuras atualizações</span></span></li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button size="lg" className="w-full text-lg h-14 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    ADQUIRIR AGORA!
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-background">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground mt-2">© {new Date().getFullYear()} Página Lúdica PEI. Todos os direitos reservados.</p>
            </div>
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Link href="#" className="text-sm hover:text-primary transition-colors">Política de Privacidade</Link>
              <Link href="#" className="text-sm hover:text-primary transition-colors">Termos de Uso</Link>
              <Link href="#" className="text-sm hover:text-primary transition-colors">Contato</Link>
            </div>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook"><Facebook className="h-6 w-6 hover:text-primary transition-colors" /></Link>
              <Link href="#" aria-label="Instagram"><Instagram className="h-6 w-6 hover:text-primary transition-colors" /></Link>
              <Link href="#" aria-label="Youtube"><Youtube className="h-6 w-6 hover:text-primary transition-colors" /></Link>
            </div>
          </div>
        </div>
      </footer>
      <Chatbot />
    </div>
  );
}

    

    
