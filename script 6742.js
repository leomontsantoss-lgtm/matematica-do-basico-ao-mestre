// =====================================================
// MATEMÁTICA DO BÁSICO AO MESTRE — script.js
// =====================================================

document.addEventListener('DOMContentLoaded', () => {

  /* -----------------------------------------------
     1) MENU HAMBÚRGUER (mobile)
  ----------------------------------------------- */
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Fecha o menu ao clicar em um link (mobile)
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* -----------------------------------------------
     2) FAQ EM ACORDEÃO
  ----------------------------------------------- */
  const faqButtons = document.querySelectorAll('.faq-question');

  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      const isOpen = button.getAttribute('aria-expanded') === 'true';

      // Fecha os outros itens abertos (comportamento de acordeão simples)
      faqButtons.forEach(otherButton => {
        if (otherButton !== button) {
          otherButton.setAttribute('aria-expanded', 'false');
          otherButton.nextElementSibling.style.maxHeight = null;
        }
      });

      if (isOpen) {
        button.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = null;
      } else {
        button.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  /* -----------------------------------------------
     3) VOLUMES 3 A 10 DA COLEÇÃO
     -----------------------------------------------
     EDITE AQUI quando novos volumes tiverem nome definido.
     Basta trocar "name: null" por "name: 'Nome do volume'"
     que o site atualiza automaticamente o texto exibido.
  ----------------------------------------------- */
  const proximosVolumes = [
    { numero: 3, name: null },
    { numero: 4, name: null },
    { numero: 5, name: null },
    { numero: 6, name: null },
    { numero: 7, name: null },
    { numero: 8, name: null },
    { numero: 9, name: null },
    { numero: 10, name: null },
  ];

  const collectionList = document.getElementById('collection-list');

  if (collectionList) {
    proximosVolumes.forEach(vol => {
      const row = document.createElement('div');
      row.className = 'collection-row';

      const main = document.createElement('div');
      main.className = 'collection-row-main';

      const volSpan = document.createElement('span');
      volSpan.className = 'collection-vol';
      volSpan.textContent = `Volume ${vol.numero}`;

      const nameSpan = document.createElement('span');
      nameSpan.className = 'collection-name';
      nameSpan.textContent = vol.name ? vol.name : 'Em breve';

      main.appendChild(volSpan);
      main.appendChild(nameSpan);

      const status = document.createElement('span');
      status.className = 'status status-soon';
      status.textContent = 'Em breve';

      row.appendChild(main);
      row.appendChild(status);
      collectionList.appendChild(row);
    });
  }

  /* -----------------------------------------------
     4) LINK DO CHECKOUT (placeholder)
     -----------------------------------------------
     EDITE AQUI: troque o valor de CHECKOUT_URL pelo
     link real de checkout (ex.: link da Kiwify) quando
     estiver disponível.
  ----------------------------------------------- */
  const CHECKOUT_URL = null; // Ex.: 'https://pay.kiwify.com.br/xxxxxx'

  const checkoutLink = document.getElementById('checkout-link');
  if (checkoutLink) {
    if (CHECKOUT_URL) {
      checkoutLink.href = CHECKOUT_URL;
    } else {
      checkoutLink.href = '#';
      checkoutLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('LINK DO CHECKOUT AQUI — configure o link de pagamento em script.js (CHECKOUT_URL).');
      });
    }
  }

});
