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
  Heart,
  Instagram,
  Package,
  PackagePlus,
  PlayCircle,
  Rocket,
  Sparkles,
  Star,
  Users,
  Youtube,
} from "lucide-react";

const findImage = (id: string) => {
  const img = PlaceHolderImages.find((img) => img.id === id);
  if (!img) {
    return { imageUrl: "https://picsum.photos/seed/error/600/400", imageHint: "placeholder", description: "" };
  }
  return img;
};

const benefits = [
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Prontidão e Diversão",
    description: "Modelos prontos que podem ser facilmente adaptados para diferentes crianças e situações.",
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: "Ensinar de forma lúdica",
    description: "Com ilustrações coloridas e atividades divertidas, ensinar será um momento de aprendizado feliz.",
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Economize tempo para brincar",
    description: "Deixe de lado a elaboração difícil e tenha mais tempo para brincar e ensinar!",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Adaptabilidade para Todos",
    description: "Perfeito para atividades em sala de aula ou ensino remoto, adaptável para todos os tipos de alunos.",
  },
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "Suporte Completo para Professores",
    description: "Modelos que vêm com tudo que você precisa, desde relatórios até atividades divertidas!",
  },
];

const bonuses = [
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: "Comunidade Colorida",
    description: "Participe de um grupo de professores para trocar ideias e materiais didáticos divertidos.",
  },
  {
    icon: <PlayCircle className="h-8 w-8 text-accent" />,
    title: "Guia da Diversão",
    description: "Como usar os modelos para ensinar de forma criativa e interativa.",
  },
  {
    icon: <Heart className="h-8 w-8 text-accent" />,
    title: "Suporte Amigo",
    description: "Tem dúvidas? Nosso suporte técnico está aqui para ajudar você a brincar de ensinar!",
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
];

const carouselImages = ["carousel-1", "carousel-2", "carousel-3", "carousel-4"].map(id => findImage(id));

export default function Home() {
  const heroImage = findImage("hero-image");

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-[23px] font-bold font-headline tracking-tighter max-w-3xl mx-auto">
              Dê adeus a dificuldade em elaborar seu PEI! Aqui temos modelos <span className="text-primary">PRONTOS E EDITÁVEIS</span>!
            </h2>
            <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
              No arquivo contém 47 modelos, planejados por profissionais da educação. Servem para fundamental I e II. Mas como são editáveis você consegue Adaptar para OUTRAS TURMAS também.
            </p>
            <div className="mt-8 rounded-xl shadow-2xl overflow-hidden max-w-5xl mx-auto">
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
            <h3 className="text-3xl md:text-4xl font-bold text-center font-headline mb-12">
              Benefícios <span className="text-primary">Exclusivos</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 bg-background rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bonuses Section */}
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl md:text-4xl font-bold text-center font-headline mb-12">
              E tem mais <span className="text-accent">Bônus</span>!
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {bonuses.map((bonus, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 border-2 border-dashed border-accent rounded-2xl">
                  <div className="bg-accent/10 p-4 rounded-full mb-4">
                    {bonus.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{bonus.title}</h4>
                  <p className="text-muted-foreground">{bonus.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl md:text-4xl font-bold text-center font-headline mb-12">
              O que os <span className="text-primary">professores</span> dizem
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-background shadow-xl border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-14 w-14 mr-4">
                        <AvatarImage src={testimonial.avatar.imageUrl} alt={testimonial.name} data-ai-hint={testimonial.avatar.imageHint} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <div className="flex text-primary">
                          <Star className="h-5 w-5 fill-current" />
                          <Star className="h-5 w-5 fill-current" />
                          <Star className="h-5 w-5 fill-current" />
                          <Star className="h-5 w-5 fill-current" />
                          <Star className="h-5 w-5 fill-current" />
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Samples Carousel Section */}
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl md:text-4xl font-bold text-center font-headline mb-4">
              Veja algumas amostras!
            </h3>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Nossos modelos de PEI são feitos para tornar o ensino mais divertido e interativo!
            </p>
            <Carousel
              opts={{ loop: true }}
              className="w-full max-w-4xl mx-auto"
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
                          height={400}
                          className="w-full aspect-video object-cover"
                          data-ai-hint={img.imageHint}
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="transform hover:scale-110 transition-transform -left-4 md:-left-12" />
              <CarouselNext className="transform hover:scale-110 transition-transform -right-4 md:-right-12" />
            </Carousel>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl md:text-4xl font-bold text-center font-headline mb-12">
              Escolha seu plano e comece a <span className="text-primary">brincar</span>!
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
              <Card className="bg-background shadow-lg flex flex-col">
                <CardHeader>
                  <Package className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="font-headline text-2xl">Plano Básico</CardTitle>
                  <CardDescription>Para começar com tudo!</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-4xl font-bold mb-4">R$ 15,90</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-accent mr-2" /> 47 Modelos de PEI prontos e editáveis</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-accent mr-2" /> Cores vibrantes e atividades simples</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button size="lg" className="w-full text-lg h-14 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    Adquirir Agora e Começar a Brincar!
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-primary text-primary-foreground shadow-2xl flex flex-col border-4 border-primary ring-4 ring-primary/20">
                <CardHeader>
                  <PackagePlus className="h-10 w-10 mb-2" />
                  <CardTitle className="font-headline text-2xl">Plano Pro</CardTitle>
                  <CardDescription className="text-primary-foreground/80">O pacote completo da diversão!</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-4xl font-bold mb-4">R$ 18,90</p>
                  <ul className="space-y-2">
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2" /> Tudo do Plano Básico</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2" /> Bônus extras (PEI Autismo, Relatórios AEE)</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2" /> Atividades motoras e muito mais!</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button size="lg" variant="secondary" className="w-full text-lg h-14 bg-white text-primary hover:bg-white/90 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    Criar um Mundo Colorido de Aprendizado!
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
              <Logo className="text-white" />
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
      
    </div>
  );
}
