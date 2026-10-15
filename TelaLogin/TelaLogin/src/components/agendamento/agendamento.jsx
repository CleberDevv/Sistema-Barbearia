
import "./agendamento.css";
import { FaCalendarAlt, FaClock, FaCut, FaCheckCircle } from "react-icons/fa";

function Agendamento() {
  return (
    <main className="pagina-agendamento">

      {/* CABEÇALHO */}
      <header className="agendamento-header">
        <h1>Agendamento</h1>
        <p>Escolha a data e o horário para o seu atendimento</p>
      </header>

      {/* PAINÉIS PRINCIPAIS */}
      <section className="agendamento-paineis">

        {/* CALENDÁRIO */}
        <div className="painel-agendamento">
          <h2>
            <FaCalendarAlt /> Outubro 2024
          </h2>

          <div className="calendario-semana">
            <span>SEG</span>
            <span>TER</span>
            <span>QUA</span>
            <span>QUI</span>
            <span>SEX</span>
            <span>SÁB</span>
            <span>DOM</span>
          </div>

          <div className="calendario-dias">
            {Array.from({ length: 35 }, (_, i) => (
              <button key={i} className="dia-calendario">
                {i + 1}
              </button>
            ))}
          </div>

          <p className="calendario-info">
            Selecione uma data para seu atendimento
          </p>
        </div>

        {/* HORÁRIOS */}
        <div className="painel-agendamento">
          <h2>
            <FaClock /> Horários disponíveis
          </h2>

          <p className="horarios-subtitulo">
            Selecione um horário
          </p>

          <div className="grade-horarios">
            {[
              "09:00", "10:00",
              "11:00", "13:30",
              "14:30", "15:00",
              "16:00", "17:30"
            ].map((horario) => (
              <button className="botao-horario" key={horario}>
                {horario}
              </button>
            ))}
          </div>

          {/* RESUMO */}
          <div className="resumo-agendamento">
            <h3>Resumo do agendamento</h3>

            <p><FaCut /> Serviço: Corte GOLD — R$ 39,00</p>
            <p><FaCalendarAlt /> Data: Não selecionada</p>
            <p><FaClock /> Horário: Não selecionado</p>
          </div>
        </div>

      </section>

      {/* BOTÃO DE CONFIRMAÇÃO */}
      <button className="confirmar-agendamento">
        <FaCheckCircle />
        Confirmar agendamento
      </button>

    </main>
  );
}

export default Agendamento;
