// whatsapp.js

// Configuração do WhatsApp
const numero = "5589999811040"; // Seu número

// Função auxiliar para abrir o WhatsApp
const abrirZap = (mensagem) => {
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
};

// ============================================================
// 1. BOTÕES GERAIS E PLANOS
// ============================================================

// Botão do Hero (Primeira Dobra)
const btnHero = document.getElementById("btnHero");
if (btnHero) {
  btnHero.onclick = () => abrirZap("Olá Lucas! Gostaria de saber mais sobre a consultoria e agendar uma avaliação.");
}

// Botão do Header (Menu de Navegação se houver CTA lá)
const btnHeader = document.getElementById("btnHeader");
if (btnHeader) {
  btnHeader.onclick = () => abrirZap("Olá! Vim pelo site e tenho interesse na consultoria.");
}

// --- CONSULTORIA ONLINE ---

// Plano Mensal
const btnOnlineMensal = document.querySelector(".btn-online-mensal");
if (btnOnlineMensal) {
  btnOnlineMensal.onclick = () => abrirZap("Olá! Tenho interesse na Consultoria Online (Plano Mensal - R$ 300).");
}

// Plano Trimestral
const btnOnlineTri = document.querySelector(".btn-online-tri");
if (btnOnlineTri) {
  btnOnlineTri.onclick = () => abrirZap("Olá! Tenho interesse na Consultoria Online (Plano Trimestral - R$ 840).");
}

// Plano Semestral
const btnOnlineSemi = document.querySelector(".btn-online-semi");
if (btnOnlineSemi) {
  btnOnlineSemi.onclick = () => abrirZap("Olá! Tenho interesse na Consultoria Online (Plano Semestral - R$ 1620).");
}

// --- PRESENCIAL ---

// Personalizado
const btnPresencialPers = document.querySelector(".btn-presencial-pers");
if (btnPresencialPers) {
  btnPresencialPers.onclick = () => abrirZap("Olá! Tenho interesse no Plano Presencial Personalizado. Gostaria de saber sobre horários.");
}

// 3x Semana
const btnPresencial3x = document.querySelector(".btn-presencial-3x");
if (btnPresencial3x) {
  btnPresencial3x.onclick = () => abrirZap("Olá! Tenho interesse no Plano Presencial 3x na Semana. Gostaria de verificar disponibilidade.");
}

// ============================================================
// 2. SEÇÃO DE AGENDAMENTO (DATA E HORA) - CORRIGIDO
// ============================================================

const btnConfirmar = document.getElementById("confirmar");
if (btnConfirmar) {
  btnConfirmar.onclick = () => {
    const dataInput = document.getElementById("data").value;
    const horaInput = document.getElementById("hora").value;

    // Validação simples
    if (!dataInput || !horaInput) {
      alert("Por favor, selecione uma data e um horário para o pré-agendamento.");
      return;
    }

    // Formata a data de AAAA-MM-DD para DD/MM/AAAA
    const [ano, mes, dia] = dataInput.split("-");
    const dataFormatada = `${dia}/${mes}/${ano}`;

    // Cria a mensagem personalizada
    const msg = `Olá Lucas! Gostaria de fazer um pré-agendamento presencial para o dia *${dataFormatada}* às *${horaInput}*.`;
    
    abrirZap(msg);
  };
}

// ============================================================
// 3. BOTÕES FINAIS E FLUTUANTES
// ============================================================

// Botão Final (CTA de Encerramento - texto link)
const btnFinal = document.getElementById("btnFinal");
if (btnFinal) {
  btnFinal.onclick = () => abrirZap("Olá! Estou pronto para começar. Como faço para iniciar?");
}

// Botão Flutuante (Canto direito)
const btnFloat = document.getElementById("wppFloat");
if (btnFloat) {
  btnFloat.onclick = () => abrirZap("Olá! Vim pelo site e tenho algumas dúvidas.");
}