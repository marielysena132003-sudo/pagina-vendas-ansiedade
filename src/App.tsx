import React from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  ShieldCheck, 
  Clock, 
  Brain, 
  Heart, 
  Sparkles, 
  ArrowRight, 
  Moon, 
  Users, 
  Zap,
  ChevronDown
} from 'lucide-react';
import { motion } from 'motion/react';

const App = () => {
  const CHECKOUT_URL = "https://pay.kiwify.com.br/az37Zut";

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white pt-20 pb-24 lg:pt-32 lg:pb-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-400 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-400 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-emerald-700 uppercase bg-emerald-50 rounded-full border border-emerald-100">
              Recupere sua paz interior
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
              Silencie o barulho da sua mente e <span className="text-emerald-600">volte a respirar com calma.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Um guia prático e acolhedor para quem deseja vencer a ansiedade, o medo constante e os pensamentos acelerados sem métodos complexos ou promessas milagrosas.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button 
                onClick={scrollToPricing}
                className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl shadow-lg shadow-emerald-200 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
              >
                Quero vencer a ansiedade agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-2xl font-bold text-slate-900">R$ 17,90</span>
                <span className="text-xs text-slate-500 uppercase tracking-wider">Pagamento único</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-8 text-slate-400 grayscale opacity-70">
              <ShieldCheck className="w-6 h-6" />
              <Clock className="w-6 h-6" />
              <Users className="w-6 h-6" />
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-300">
          <ChevronDown className="w-8 h-8" />
        </div>
      </section>

      {/* 2. SEÇÃO DAS DORES */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">
              Você sente que está sempre <span className="text-emerald-600">em estado de alerta?</span>
            </h2>
            
            <div className="grid gap-6">
              {[
                "Acorda com o peito apertado e uma sensação de que algo ruim vai acontecer?",
                "Sua mente não para um segundo, criando cenários de desastre que nunca ocorrem?",
                "Sente cansaço extremo, mas quando deita, o sono simplesmente não vem?",
                "Perde oportunidades ou evita lugares por medo de ter uma crise?",
                "Sente que está perdendo o controle da sua própria vida para o medo?"
              ].map((question, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex gap-4 items-start"
                >
                  <div className="mt-1 bg-emerald-50 p-2 rounded-lg">
                    <Heart className="w-5 h-5 text-emerald-600" />
                  </div>
                  <p className="text-lg text-slate-700 leading-relaxed">{question}</p>
                </motion.div>
              ))}
            </div>
            
            <p className="mt-12 text-center text-slate-600 italic">
              Se você respondeu "sim" para qualquer uma dessas perguntas, saiba que você não está sozinho. Milhões de pessoas enfrentam isso todos os dias, e o mais importante: existe um caminho de volta.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO DE CONSEQUÊNCIAS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-columns-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                O custo invisível de <span className="text-red-500">ignorar a ansiedade</span>
              </h2>
              <p className="text-lg text-slate-600">
                A ansiedade não é apenas um "sentimento passageiro". Quando não cuidada, ela se torna uma barreira que impede você de viver plenamente.
              </p>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 mt-1">
                    <XCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Relacionamentos desgastados</h4>
                    <p className="text-slate-600">A irritabilidade e o isolamento afastam quem você mais ama.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 mt-1">
                    <XCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Saúde física em risco</h4>
                    <p className="text-slate-600">Dores musculares, problemas digestivos e baixa imunidade constante.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 mt-1">
                    <XCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Estagnação profissional</h4>
                    <p className="text-slate-600">A falta de foco e o medo de errar impedem seu crescimento.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-3xl rounded-full"></div>
              <h3 className="text-2xl font-bold mb-6">Não precisa ser assim.</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Você não nasceu para viver com medo. O seu corpo e sua mente estão apenas pedindo por ajuda, e ignorar esse sinal só torna o caminho mais difícil. O primeiro passo para a mudança é decidir que você merece paz.
              </p>
              <button 
                onClick={scrollToPricing}
                className="w-full py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-emerald-50 transition-colors flex items-center justify-center"
              >
                Eu quero mudar minha realidade
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO DA SOLUÇÃO */}
      <section className="py-24 bg-emerald-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <Sparkles className="w-12 h-12 mx-auto mb-8 opacity-80" />
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Apresentamos o Método <br/>Vencendo a Ansiedade
            </h2>
            <p className="text-xl text-emerald-50 mb-12 leading-relaxed">
              Um caminho simples, humano e direto ao ponto. Sem termos técnicos complicados ou promessas de cura milagrosa em 24 horas. O que oferecemos é um método baseado em práticas reais para você retomar as rédeas da sua mente.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-emerald-700/50 p-6 rounded-2xl border border-emerald-500/30">
                <Brain className="w-8 h-8 mb-4 text-emerald-300" />
                <h4 className="font-bold mb-2">Mentalidade</h4>
                <p className="text-sm text-emerald-100">Entenda como sua mente funciona e por que ela cria a ansiedade.</p>
              </div>
              <div className="bg-emerald-700/50 p-6 rounded-2xl border border-emerald-500/30">
                <Zap className="w-8 h-8 mb-4 text-emerald-300" />
                <h4 className="font-bold mb-2">Ação Imediata</h4>
                <p className="text-sm text-emerald-100">Técnicas práticas para usar no momento exato de uma crise.</p>
              </div>
              <div className="bg-emerald-700/50 p-6 rounded-2xl border border-emerald-500/30">
                <Moon className="w-8 h-8 mb-4 text-emerald-300" />
                <h4 className="font-bold mb-2">Consistência</h4>
                <p className="text-sm text-emerald-100">Hábitos pequenos que protegem sua paz mental a longo prazo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. O QUE VOCÊ VAI APRENDER */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">O que você vai encontrar no método</h2>
              <p className="text-slate-600">Conteúdo prático focado em resultados reais no seu dia a dia.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {[
                { title: "Identificação de Gatilhos", desc: "Como perceber o início da ansiedade antes que ela se torne uma crise." },
                { title: "Técnicas de Respiração", desc: "Métodos discretos e eficazes para acalmar o sistema nervoso em segundos." },
                { title: "Higiene do Sono", desc: "O passo a passo para desligar a mente e finalmente ter uma noite de descanso." },
                { title: "Gestão de Pensamentos", desc: "Como lidar com pensamentos intrusivos e obsessivos sem lutar contra eles." },
                { title: "Organização Emocional", desc: "Ferramentas para não se sobrecarregar com as demandas do cotidiano." },
                { title: "Autocompaixão", desc: "Como parar de se culpar por sentir ansiedade e ser seu maior aliado." }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. PARA QUEM É / PARA QUEM NÃO É */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-emerald-700 mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6" />
                Este método É para você se:
              </h3>
              <ul className="space-y-4 text-slate-600">
                <li>• Sente que a ansiedade está travando sua vida.</li>
                <li>• Busca uma solução prática e de baixo custo.</li>
                <li>• Quer aprender a lidar com as emoções de forma saudável.</li>
                <li>• Está cansado de promessas vazias e quer algo real.</li>
                <li>• Deseja voltar a dormir bem e ter energia.</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-400 mb-6 flex items-center gap-2">
                <XCircle className="w-6 h-6" />
                Este método NÃO é para você se:
              </h3>
              <ul className="space-y-4 text-slate-500">
                <li>• Busca uma "pílula mágica" sem nenhum esforço.</li>
                <li>• Acredita que a ansiedade sumirá sem mudar hábitos.</li>
                <li>• Procura substituição para tratamento médico/psiquiátrico.</li>
                <li>• Não está disposto a dedicar 10 min por dia a si mesmo.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BÔNUS EXCLUSIVO */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-emerald-50 rounded-[2.5rem] p-8 md:p-16 relative">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-200 rounded-full blur-2xl opacity-50"></div>
            <div className="relative z-10">
              <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-4 block">Presente Especial</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Bônus: Guia de Meditação para Iniciantes</h2>
              <p className="text-lg text-slate-600 mb-8">
                Ao adquirir o método hoje, você também recebe nosso guia exclusivo de meditação guiada em texto, focado em acalmar a mente em momentos de pico de estresse.
              </p>
              <div className="flex items-center gap-4">
                <div className="bg-white px-4 py-2 rounded-full border border-emerald-100 text-emerald-700 font-bold text-sm">
                  VALOR: R$ 19,90
                </div>
                <div className="text-emerald-600 font-bold">GRÁTIS HOJE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PREÇO E OFERTA */}
      <section id="pricing" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Sua paz mental custa menos que um lanche.</h2>
            <p className="text-slate-400 mb-12 text-lg">
              Acreditamos que o acesso ao bem-estar emocional deve ser democrático. Por isso, mantivemos o valor o mais acessível possível.
            </p>
            
            <div className="bg-white text-slate-900 rounded-[3rem] p-10 md:p-16 shadow-2xl relative">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest">
                Oferta por tempo limitado
              </div>
              
              <div className="mb-8">
                <span className="text-slate-400 line-through text-xl">De R$ 67,00</span>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <span className="text-2xl font-medium">Por apenas</span>
                  <span className="text-6xl md:text-7xl font-black text-emerald-600">R$ 17,90</span>
                </div>
                <p className="text-slate-500 mt-4">Pagamento único. Acesso imediato.</p>
              </div>
              
              <a 
                href={CHECKOUT_URL}
                className="w-full py-6 bg-emerald-600 hover:bg-emerald-700 text-white text-xl font-black rounded-2xl shadow-xl shadow-emerald-200 transition-all hover:scale-[1.02] active:scale-95 mb-8 flex items-center justify-center"
              >
                QUERO MEU ACESSO AGORA
              </a>
              
              <div className="flex flex-wrap justify-center gap-6 opacity-60">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" alt="PayPal" className="h-6 object-contain" referrerPolicy="no-referrer" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-4 object-contain" referrerPolicy="no-referrer" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6 object-contain" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. GARANTIA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-emerald-100 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-16 h-16 text-emerald-600" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Risco Zero: 7 dias de garantia</h3>
              <p className="text-slate-600 leading-relaxed">
                Eu confio tanto na transformação que este método pode gerar que ofereço uma garantia incondicional. Se em até 7 dias você sentir que o conteúdo não é para você, basta nos enviar um e-mail e devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CTA FINAL */}
      <section className="py-24 bg-emerald-50 text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">A sua jornada para uma vida mais leve começa com um clique.</h2>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Não deixe para amanhã a paz que você pode começar a construir hoje. A ansiedade já tirou tempo demais de você. É hora de retomar o controle.
            </p>
            <button 
              onClick={scrollToPricing}
              className="inline-block px-12 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              Sim, eu quero vencer a ansiedade
            </button>
            <p className="mt-8 text-sm text-slate-400">
              Compra 100% Segura • Acesso Vitalício • Suporte Dedicado
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Método Vencendo a Ansiedade. Todos os direitos reservados.
          </p>
          <p className="text-slate-300 text-xs mt-4 max-w-2xl mx-auto">
            Aviso Legal: Este produto não substitui o aconselhamento médico profissional. Sempre consulte um profissional de saúde para questões relacionadas à sua saúde mental.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
