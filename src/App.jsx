import React, { useEffect, useRef, useState } from "react";
import "./App.css";

function Loader({ size = 48 }) {
  return (
    <div className="db-loader" style={{ width: size, height: size }}>
      <div className="db-ring"></div>
      <div className="db-core"></div>
    </div>
  );
}
function AnimatedItem({ icon, title, description }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visible) {
          setVisible(true);

          setTimeout(() => {
            setShowIcon(true);
          }, 1000); // 1 segundo de loading
        }
      },
      { threshold: 0.4 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [visible]);
  return (
    <div ref={ref} className="op-item">
      <div className="op-icon">
        {icon}
        {/* <Loader /> */}
      </div>
      <div>
        <h4>{title}</h4>
        {/* <p>{description}</p> */}
      </div>
    </div>
  );
}

export default function AgroIAHome() {
  return (
    <div className="agro-container">
      <div className="grid-overlay" />

      <header className="hero">
        <div className="hero-content">
          <h1 className="logo">
            Agro<span>IA</span>
          </h1>

          <div className="feature-card-hero ai-card">
            <h4>Produtores rurais, Comerciantes e Investidores</h4>
          </div>
          <div className="feature-card-hero-cta">
            <h2>Tome decisões inteligentes com a nossa IA</h2>
            <a href="#oportunidades">
              <button className="btn-primary">Explorar Oportunidades</button>
            </a>
          </div>
        </div>
      </header>

      <section id="oportunidades" className="map-section">
        <div className="op-card">
          <div className="op-header">
            {/* <div className="op-badge">FEATURE</div> */}
            <h2>
              Visualize oportunidades de compra e venda de produtos agrícolas
            </h2>
          </div>

          <div className="op-content">
            <AnimatedItem
              icon="🗺️"
              // title="Mapa de Oportunidades"
              title="Veja as regiões com maior concentração de oportunidades"
              description="Regiões com maior concentração de oportunidades"
            />

            <AnimatedItem
              icon="📈"
              // title="ROI Inteligente"
              title="Identificamos se o ROI é baixo ou alto"
              description="Identificamos se o ROI é baixo ou alto"
            />

            <AnimatedItem
              icon="🎯"
              // title="Filtros Estratégicos"
              title="Filtre por produto, estado, ROI mínimo e época de plantio"
              description="Produto, estado, ROI mínimo e época de plantio"
            />

            <AnimatedItem
              icon="⚡"
              // title="Eventos Extremos"
              title="Sinalizamos eventos extremos: granizo, ondas de calor/frio e tempestades"
              description="Granizo, ondas de calor/frio e tempestades sinalizadas"
            />
          </div>

          {/* @@@ Mais funcionalidades */}
          <div className="feature-wrapper">
            <div className="feature-card">
              <div className="feature-header">
                <h2 className="ai-badge">Financeiro</h2>
                {/* <h2>Financeiro</h2> */}
                {/* <Loader /> */}
              </div>

              <div className="feature-grid">
                <div className="feature-item">
                  {/* <span className="icon">📊</span> */}
                  <p>Calculamos ROI, preços, frete e projetamos o lucro</p>
                </div>

                <div className="feature-item">
                  {/* <span className="icon">📦</span> */}
                  <p>
                    Analisamos <strong>shelf-life</strong>, perdas estimadas e
                    condições ideais de armazenagem
                  </p>
                </div>

                <div className="feature-item decision">
                  {/* <span className="icon">🤖</span> */}
                  <p>Recomendação de IA</p>

                  <div className="decision-tags">
                    <span className="buy">COMPRAR</span>
                    <span className="wait">AGUARDAR</span>
                    <span className="no-buy">NÃO COMPRAR</span>
                  </div>
                </div>
                {/* @@@ AAA */}
                <div className="roi-wrapper">
                  <div className="roi-card">
                    <h2 className="roi-title">
                      Calculo de retorno sobre investimento de uma produção
                      agrícola
                    </h2>

                    <div className="variables-section">
                      <div className="variable-box">
                        <span className="var-label">Área plantada</span>
                      </div>

                      {/* <div className="operator">+</div> */}

                      <div className="variable-box">
                        <span className="var-label">Custo por hectare</span>
                      </div>

                      {/* <div className="operator">+</div> */}

                      <div className="variable-box">
                        <span className="var-label">
                          Produtividade esperada
                        </span>
                      </div>

                      {/* <div className="operator">+</div> */}

                      <div className="variable-box">
                        <span className="var-label">
                          Preço de venda projetado
                        </span>
                      </div>
                    </div>

                    <div className="equals-section">
                      {/* <p>Resultado</p> */}
                      <span>Resultado</span>
                    </div>

                    <div className="result-section">
                      <div className="result-box">
                        <h3>ROI, Lucro Líquido e Análise de Risco</h3>

                        {/* <div className="result-items">
                          <span>ROI</span>
                          <span>Lucro Líquido</span>
                          <span>Análise de Risco</span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="roi-wrapper">
                  <div className="roi-card">
                    <h2 className="roi-title">
                      Oportunidades para comprar em um estado e vender em outro
                    </h2>

                    <div className="variables-section">
                      <div className="variable-box">
                        <span className="var-label">
                          Origem e destino (estados/cidades)
                        </span>
                      </div>

                      {/* <div className="operator">+</div> */}

                      <div className="variable-box">
                        <span className="var-label">Produto e volume</span>
                      </div>
                    </div>

                    <div className="equals-section">
                      {/* <p>Resultado</p> */}
                      <span>Resultado</span>
                    </div>

                    <div className="result-section">
                      <div className="result-box">
                        <h3>
                          ROI considerando frete, dólar, perdas e comissões
                        </h3>

                        {/* <div className="result-items">
                          <span>ROI</span>
                          <span>Lucro Líquido</span>
                          <span>Análise de Risco</span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="feature-header">
                <h2 className="ai-badge">Dashboard</h2>
                {/* <h2>Financeiro</h2> */}
                {/* <Loader /> */}
              </div>

              <div className="feature-grid">
                <div className="feature-item">
                  {/* <span className="icon">📊</span> */}
                  <p>Gráficos de tendências de preços</p>
                </div>

                <div className="feature-item">
                  {/* <span className="icon">📦</span> */}
                  <p>Ordenamos as melhores oportunidades do momento por ROI</p>
                </div>

                <div className="feature-item decision">
                  {/* <span className="icon">🤖</span> */}
                  <p>
                    Entregamos uma análise de mercado com médias móveis e
                    sazonalidade
                  </p>
                </div>

                <div className="feature-item decision">
                  {/* <span className="icon">🤖</span> */}
                  <p>Você pode salvar e acompanhar oportunidades</p>
                </div>
              </div>

              <div className="feature-header">
                <h2 className="ai-badge">Assistente de IA</h2>
                {/* <h2>Financeiro</h2> */}
                {/* <Loader /> */}
              </div>

              <div className="feature-grid">
                <div className="feature-item">
                  {/* <span className="icon">📊</span> */}
                  <p>Faça uma pergunta para a IA</p>
                </div>

                <div className="feature-item">
                  {/* <span className="icon">📦</span> */}
                  <p>IA analisa documentos da Embrapa, UFG e ZARC</p>
                </div>

                <div className="feature-item decision">
                  {/* <span className="icon">🤖</span> */}
                  <p>IA Responde citando as fontes (qual PDF, qual página)</p>
                </div>
              </div>

              <div className="feature-header">
                <h2 className="ai-badge">Previsão com IA</h2>
                {/* <h2>Financeiro</h2> */}
                {/* <Loader /> */}
              </div>

              <div className="feature-grid">
                <div className="feature-item">
                  {/* <span className="icon">📊</span> */}
                  <p>Sistema inteligente que prever preços futuros</p>
                </div>

                <div className="feature-item">
                  {/* <span className="icon">📦</span> */}
                  {/* <p>Projetamos o preço 7 dias antes</p> */}
                  <p>Preço projetado 7 dias à frente</p>
                </div>

                <div className="feature-item decision">
                  {/* <span className="icon">🤖</span> */}
                  <p>Tendência de longo prazo de 30 dias</p>
                </div>

                <div className="feature-item decision">
                  {/* <span className="icon">🤖</span> */}
                  <p>
                    Consideramos padrões históricos como preços altos no inverno
                  </p>
                </div>
              </div>

              <div className="feature-header">
                <h2 className="ai-badge">Coletamos dados do mercado</h2>
                {/* <h2>Financeiro</h2> */}
                {/* <Loader /> */}
              </div>

              <div className="feature-grid">
                <div className="feature-item">
                  {/* <span className="icon">📊</span> */}
                  <p>CEASA (SP, PR, MG, RJ, RS, GO, BA, PE)</p>
                </div>

                <div className="feature-item">
                  {/* <span className="icon">📦</span> */}
                  <p>Agrolink (portal de preços agrícolas)</p>
                </div>

                <div className="feature-item decision">
                  {/* <span className="icon">🤖</span> */}
                  <p>CONAB (Companhia Nacional de Abastecimento)</p>
                </div>

                <div className="feature-item decision">
                  {/* <span className="icon">🤖</span> */}
                  <p>IBGE SIDRA (dados de produção agrícola)</p>
                </div>

                <div className="feature-item decision">
                  {/* <span className="icon">🤖</span> */}
                  <p>ZARC (Zoneamento Agrícola de Risco Climático - MAPA)</p>
                </div>
              </div>

              {/* <div className="feature-header">
                <h2 className="ai-badge">Documentos valiosos</h2>
              </div>

              <div className="feature-grid">
                <div className="feature-item">
                  <p>Clima e Produção de Tomates no Brasil</p>
                </div>

                <div className="feature-item">
                  <p>Funcionalidade Custo de Armazenagem de Tomate</p>
                </div>

                <div className="feature-item decision">
                  <p>Épocas de Plantio e Métricas de Decisão para Cultivo de Tomate</p>
                </div>

              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
