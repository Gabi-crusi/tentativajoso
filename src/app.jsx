import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const perguntasEDesafios = [
  // Perguntas
  "Quando você percebeu que estava se apaixonando por mim?",
  "Qual foi o momento mais marcante do nosso relacionamento até hoje?",
  "Existe algo do seu passado amoroso que você nunca me contou, mas acha que seria bom compartilhar?",
  "O que mais te impressionou em mim quando nos conhecemos?",
  "Qual é sua lembrança mais marcante da infância?",
  "Já teve o coração partido? Como superou?",
  "Qual foi o momento mais difícil da sua vida e como você lidou com ele?",
  "O que eu faço durante uma discussão que você gostaria que eu mudasse?",
  "Qual é a melhor forma de te pedir desculpas?",
  "Você se sente confortável em me contar tudo? Se não, o que dificulta?",
  "Qual nossa briga mais boba — e como poderíamos ter resolvido diferente?",
  "Como você costuma reagir durante uma briga?",
  "Você prefere resolver os problemas na hora ou precisa de um tempo?",
  "O que mais te faz se sentir amado(a) por mim?",
  "O que você gostaria de experimentar juntos (em qualquer sentido)?",
  "Qual é seu tipo favorito de carinho?",
  "Existe algo que você tem vontade de dizer durante o sexo, mas ainda não disse?",
  "Como você gosta de demonstrar amor? E de receber?",
  "Existe algo que você sente dificuldade em expressar intimamente?",
  "Onde você se imagina com a gente daqui a 10 anos?",
  "O que você acha que ainda precisamos construir juntos?",
  "Como imagina uma vida envelhecendo ao meu lado?",
  "Se tivermos filhos, o que você gostaria que herdassem de nós?",
  "Você acredita que um casal precisa ter os mesmos sonhos ou só valores parecidos?",
  "Ter filhos está nos seus planos? Como vê essa experiência?",
  "Em que situação você mais precisa do meu apoio?",
  "Quando foi a última vez que se sentiu profundamente conectado(a) a mim?",
  "O que mais admira em mim hoje?",
  "Em que parte da sua vida sente que eu te ajudo a crescer?",
  "O que significa 'crescer juntos' para você?",
  "O que seria um relacionamento ideal pra você?",

  // Desafios
  "Desafio: Dê um abraço de 20 segundos em Lucas ou Danielle antes de responder a próxima pergunta.",
  "Desafio: Faça um elogio sincero olhando nos olhos.",
  "Desafio: Conte algo que você nunca teve coragem de dizer, mas sente que deveria.",
  "Desafio: Faça um carinho na mão ou no rosto da pessoa por 15 segundos.",
  "Desafio: Escolha uma música que represente o relacionamento de vocês e cante ou mostre agora."
];

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function App() {
  const [itens, setItens] = useState([]);
  const [index, setIndex] = useState(0);
  const [turno, setTurno] = useState("Lucas");

  useEffect(() => {
    setItens(shuffleArray(perguntasEDesafios));
  }, []);

  const proximo = () => {
    setIndex((prev) => prev + 1);
    setTurno((prev) => (prev === "Lucas" ? "Danielle" : "Lucas"));
  };

  const itemAtual = itens[index];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-pink-50">
      {/* Música de fundo via Spotify */}
      <iframe
        className="mb-4"
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DX6xZZEgC9Ubl?utm_source=generator&theme=0"
        width="100%"
        height="80"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>

      {itemAtual && (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-xl"
        >
          <div className="p-6 shadow-xl rounded-2xl bg-white text-center text-lg font-semibold text-pink-700">
            <div className="mb-2 text-sm text-gray-500">
              {`Lucas 💙 Danielle — ${index + 1} de ${itens.length} — Agora é a vez de ${turno} responder!`}
            </div>
            {itemAtual}
          </div>
        </motion.div>
      )}

      {index < itens.length - 1 ? (
        <button
          onClick={proximo}
          className="mt-6 bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-xl"
        >
          Próximo 💖
        </button>
      ) : (
        <div className="mt-6 text-pink-700 font-bold text-lg">
          Fim do jogo! Esperamos que vocês estejam ainda mais conectados. 💑
        </div>
      )}
    </div>
  );
}
