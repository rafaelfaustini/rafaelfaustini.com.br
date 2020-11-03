var app = new Vue({
    el: '#app',
    data: {
      created: null,
      reps: 0,
      listaExperiencias: [],
      loaded: false,
      projetos: [
        {
          titulo:"SmartCare - Machine Learning",imagem:"img/projetos/SmartCare.jpg",ano:"2020", destaque:true,
          linguagem:"Python",descricao:"Dadas coordenadas de idosos de alzheimer indoor, o objetivo é utilizar aprendizagem profunda com a biblioteca keras, para identificar se um paciente está estressado ou não, aprendendo padrões de perambulação.",
          source:"/geradordados/", source_name:"Gerador Dados",site:"https://www.youtube.com/watch?v=nIvv3xGw1js&t=10s",
          site_name:"Visualizar",fundo:"#673AB7",height:"30"},
        {
        titulo:"Cat or dog ?",imagem:null,ano:"2020", destaque:false,
        linguagem:"Python",descricao:"Uso do aprendizado de máquina e aplicação de aprendizado profundo com keras para distinguir fotos de cachorros e gatos",
        source:"https://github.com/rafaelfaustini/machinelearning-python/tree/master/cnn/CatorDog", source_name:"Código-Fonte",site:"/catdog",
        site_name:"Visualizar",fundo:"#673AB7",height:"30"},
  
        {titulo:"Minify Your CSS",imagem:null,ano:"2020",linguagem:"Vue", destaque:false,
        descricao:"Uma ferramenta feita com javascript para minificar css em tempo real",
        source:"https://github.com/rafaelfaustini/css-minify", source_name:"Código-Fonte",site:"/minify",site_name:"Visualizar",fundo:"#03A9F4",height:"30"},
  
        {titulo:"Gas Gun",imagem:null,ano:"2020",linguagem:"C#", destaque:false,
        descricao:"Um script scripthookvdotnet c# que quando ativado substitui as granadas do lançador de granadas do Grand Theft Auto V por gas lacrimogênio ou bzgas",source:"https://github.com/rafaelfaustini/gasgun", 
        source_name:"Código-Fonte",site:null,site_name:"Visualizar",fundo:"#FF5722",height:"30"},
  
        {titulo:"Caixeiro Viajante",imagem:null,ano:"2019",linguagem:"Javascript", destaque:false,
        descricao:"Um algoritmo genético que tenta solucionar o problema do <b>Caixeiro Viajante</b> por meio da predição do melhor caminho",source:"docs/caixeiroviajante.pdf",
         source_name:"Documento com código",site:"/caixeiroviajante",site_name:"Visualizar",fundo:"#009688",height:"30"},
  
        {titulo:"TheSortingHat",imagem:null,ano:"2018",linguagem:"Java", destaque:false,
        descricao:"CraftBukkit é uma modificação do software de servidor do Minecraft. TheSortingHat é um plugin bukkit que torna possível sortear entre comandos configurados. O nome é inspirado em Harry Potter já que suas funcionalidades são muito similares ao <a href='https://harrypotter.fandom.com/wiki/Sorting_Hat'>chapéu seletor</a>",source:"https://github.com/rafaelfaustini/TheSortingHat", 
        source_name:"Código-Fonte",site:"https://dev.bukkit.org/projects/TheSortingHat",site_name:"Builds Oficiais",fundo:"#3F51B5",height:"30"},
  
        {titulo:"Anima !?",imagem:"img/projetos/anima.svg",ano:"2018",linguagem:"PHP", destaque:false,
        descricao:"Aplicativo de caronas web para a universidade La Salle do Rio de Janeiro. Apresentado em 2018 na semana de ciência e tecnologia da La Salle RJ. Fui desenvolvedor fullstack", source:"https://github.com/rafaelfaustini/anima",
        source_name:"Código-Fonte",site:"/anima",site_name:"Visualizar",fundo:"#27ae60",height:"30"},
  
        {titulo:"Text-gene",imagem:"img/projetos/SnizerGene.webp",ano:"2018", destaque:false,
        linguagem:"Javascript",
        descricao:'<p class="showcase__description mb-4 color-gray">Algoritmo genético baseado no <a href="https://pt.wikipedia.org/wiki/Teorema_do_macaco_infinito">Teorema do Macaco Infinito</a>.</p><p> Ele descobre o texto digitado de uma maneira bem melhor do que por tentativa e erro</p>',
        source:"https://github.com/rafaelfaustini/text-gene", source_name:"Código-Fonte",site:"https://snizer.com.br/gene",
        site_name:"Visualizar",fundo:"#ee6002",height:"30"},
  
        {titulo:"Snizer Hiit",imagem:"img/projetos/SnizerHiit.webp",ano:"2017", destaque:false,
        linguagem:"Delphi",
        descricao:"Snizer Hiit é uma aplicação android que traz um cronômetro para facilitar o controle de tempo durante treinos intervalares com avisos em áudio (TextToSpeech) para te ajudar a alternar os treinos",
        source:"https://github.com/rafaelfaustini/text-gene", source_name:"Código-Fonte",site:"https://play.google.com/store/apps/details?id=br.com.rafaelfaustini.snizer.hiit",
        site_name:"Visualizar",fundo:"#ee6002",height:"30"},
      ]    
    },
    methods: {
  
    },
    computed: {
      age() {
        return moment().diff('1999-04-17', 'years');
      }
    },
    mounted() {

    }
  })
  
  
  