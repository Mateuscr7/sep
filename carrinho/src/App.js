
import './App.scss';

function App() {
  return (
    <div className="main">
      <section className='header'>
        <div className='logo-sec'>
          <img src={`${process.env.PUBLIC_URL}/assets/images/LOGOSEP.png`} alt="Logo" />
          <h1>Empresa SEP</h1>
          </div>
        <div className='button'>
          <a href='#quem-somos'>Quem Somos</a>
          <a href='#indice'>Índice</a>
          <a href='#intro'>Introdução</a>
          <a href='#fluxo'>Fluxogramas</a>
          <a href='#dev'>Desenvolvimento</a>
        </div>
        <div className='logo'>
          <a><img src={`${process.env.PUBLIC_URL}/assets/images/logosenac.png`} alt="Logo" /></a>
        </div>
        
      </section>

      <section className='secao-titulo' 
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/bg.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='titulo'>
          <p>Engenharia de Produção</p>
          <h1>
            PROJETO<br/>ROBOCAR<br/>RACE
          </h1>
          <text>Construindo nosso futuro com excelência.</text>

          <a>Começar</a>
        </div>
      </section>

      <section id='quem-somos' className='secao-quem' 
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/bgtwo.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
      </section>
      <section id='indice' className='secao-indice'>
        <h1>Índice
          <div className='tachado'></div>
        </h1>
        <div>
          <a href='#intro'>1 - Introdução</a>
          <a href='#fluxo'>2 - Fluxograma Programa</a>
          <a href='#fluxo2'>3 - Fluxograma Projeto Geral</a>
          <a href='#dev'>4 - Design da Base do Carrinho</a>
          <a href='#dev2'>5 - Corte do Chassi</a>
          <a href='#dev3'>6 - Componentes</a>
          <a href='#dev4'>7 - Funcionamento do Circuito</a>
          <a href='#conc'>8 - Conclusão</a>
        </div>
      </section>
      <section id='intro' className='secao-introd'>
        <p>
        Este projeto integrador tem como objetivo a construção de um carrinho autônomo utilizando Arduino, um Motor Shield L293D e um sensor ultrassônico.<br/>
        O projeto tem como finalidade aplicar conceitos de eletrônica e programação, criando uma solução simples e eficiente para um carrinho capaz de se movimentar de maneira inteligente, ajustando sua direção conforme a presença de obstáculos.
        </p>
        <div className='intro-titulo'>
          <h1 >Introdução</h1>
        </div>
      </section>
      <section id='fluxo' className='secao-left'>
        <div className='intro-titulo'>
          <h1>Fluxograma do Programa</h1>
        </div>
        <img src={`${process.env.PUBLIC_URL}/assets/images/fluxo1.png`} alt="Logo" />
        
      </section>
      <section id='fluxo2' className='secao-introd'>
        <img src={`${process.env.PUBLIC_URL}/assets/images/fluxo2.png`} alt="Logo" />
        <div className='intro-titulo'>
          <h1 >Fluxograma do Projeto</h1>
        </div>
      </section>
      <section id='dev' className='secao-design'>
        <h1>Design da Base
          <div className='tachado'></div>
        </h1>
        <div className='two-column'>
          <div className='left'>
            <p>Foi utilizado o software <i>onshape</i> para o desenvolvimento do molde do chassi, a medida usada como base foi de XXmm de comprimento por YYmm de largura. 
            <br/>
            <br/>
            Com o formato da estrutura já concluído, foi realizados os furos para encaixe dos componentes e passagem de fios de ligação.
            <br/>
            <br/>
            Junto ao desenvolvimento da base, também foi feito o suporte dos componentes, no qual será servirá principalmente para a fixação das rodas.
            </p>
          </div>
          <div className='right'>
          <img src={`${process.env.PUBLIC_URL}/assets/images/designbase.png`} alt="Logo" />
          </div>
          
        </div>
      </section>
      <section id='dev2' className='secao-design'>
        <h1>Corte do Chassi
          <div className='tachado'></div>
        </h1>
        <div className='two-column'>
          <div className='left'>
            <p>O material do chassi é o MDF (Medium Density Fiberboard) é um painel de fibras de madeira de média densidade, com superfície lisa que facilita o acabamento. Ele foi escolhido para ser usado por conta do baixo custo e da facilidade de manuseio.
            <br/>
            <br/>
            Foi usado a máquina de corte a laser no “DI”,  para realizar os cortes do chassi, visto que, ela é um exemplo de alta precisão no qual nos entregou os cortes com precisão.
            </p>
          </div>
          <div className='right'>
            <img src={`${process.env.PUBLIC_URL}/assets/images/material.png`} alt="Logo" />
          </div>
        </div>
      </section>
      <section id='dev3' className='secao-design'>
        <h1>Componentes
          <div className='tachado'></div>
        </h1>
        <div className='two-column'>
          <div className='left'>
            <p>Os componentes utilizados para o funcionamento do carrinho serão:</p><br/>
            <ul>
              <li>Placa Uno Rev3 R3 Atmega328 Smd + Cabo Usb + Pinos;</li>
              <li>Roda + Pneu + Motor Dc 3 A 6v Com Redução Robotica Arduino;</li>
              <li>Módulo Sensor De Distância Ultrassônico Hc-sr04 Arduino;</li>
              <li>Chaves Gangorra 2 Terminais Liga Desliga;</li>
              <li>Micro Servo 9g Sg90 Towerpro Arduino Robótica Aeromodelismo;</li>
              <li>Bateria 9V;</li>
              <li>Plug Para Bateria 9V Com Saída P4 Alimentação P/ Arduino;</li>
              <li>Fio fino para ligações;</li>
              <li>Motor Shield;</li>
            </ul>
            <br/>
            <p>O motor shield driver de através do motor duplo tem a capacidade de acionar um par de motores DC de forma muito simples, contado com 4 pinos digitais do Arduino que se estendem aos 8 pinos de controle dos dois chips L293D.</p>
          </div>
          <div className='right'>
            <img src={`${process.env.PUBLIC_URL}/assets/images/motor.png`} alt="Logo" />
          </div>
        </div>
      </section>
      <section id='dev4' className='secao-design'>
        <h1>Circuito Elétrico
          <div className='tachado'></div>
        </h1>
        <div className='two-column'>
          <div className='left'>
            <p>O circuito é composto por Arduino, Motor Shield L293D e sensor ultrassônico e funciona da seguinte maneira:
            <br/>
            Sensor Ultrassônico: Mede a distância até um objeto emitindo ondas sonoras. O Arduino calcula a distância com base no tempo que o sinal leva para retornar ao sensor.<br/><br/>
            Motor Shield L293D: Controla os motores, recebendo sinais do Arduino para movimentar os motores para frente, para trás ou parar, dependendo da distância medida.<br/><br/>
            Arduino: Recebe a informação do sensor ultrassônico e, com base nela, envia comandos para o motor shield, fazendo o robô se mover ou parar, conforme necessário para evitar obstáculos.<br/>
            Basicamente, o Arduino usa os dados do sensor para controlar os motores e permitir que o robô se mova de forma inteligente, evitando colisões com objetos à frente.</p>
          </div>
          <div className='right'>
          </div>
        </div>
      </section>
      <section id='conc' className='secao-design2'>
        <h1>Conclusão
          <div className='tachado'></div>
        </h1>
        <div className='two-column'>
          <div className='left'>
            <p>
            A montagem do carro resultou em um sistema operacional eficiente e funcional. A correta soldagem dos fios e o alinhamento das polaridades foram cruciais para garantir o deslocamento do carro na direção correta. O teste individual dos motores proporcionou maior precisão e minimizou erros durante a instalação.
            <br/>
            A configuração dos motores em lados opostos exigiu atenção especial na inversão da lógica de rotação, destacando a importância de seguir cada etapa do processo com precisão. A integração do servo motor e do sensor ultrassônico ampliou a funcionalidade do veículo, permitindo a detecção de obstáculos e melhorando o desempenho geral.
            <br/>
            Por fim, a programação no Arduino foi bem-sucedida, comprovando que o passo a passo foi eficiente e resultou em um projeto funcional, pronto para ser utilizado em diversas aplicações.
            </p>
          </div>
          <div className='right'>
            <video muted autoPlay loop height="600">
              <source src={`${process.env.PUBLIC_URL}/assets/videos/carrinho.mp4`} type="video/mp4" />
              Seu navegador não suporta a reprodução de vídeo.
            </video>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default App;
