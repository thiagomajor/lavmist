/* LAVMIST — interações */
(function(){
  'use strict';
  var WHATS = "5511989046000";
  function wa(msg){ return "https://wa.me/" + WHATS + "?text=" + encodeURIComponent(msg); }

  // Nav scroll
  var nav = document.getElementById('nav');
  function onScroll(){ if(nav) nav.classList.toggle('scrolled', window.scrollY > 24); }
  onScroll(); window.addEventListener('scroll', onScroll, {passive:true});

  // Burger
  var burger = document.getElementById('burger');
  var links = document.getElementById('navlinks');
  if(burger && links){
    burger.addEventListener('click', function(){ links.classList.toggle('open'); });
    links.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', function(){ links.classList.remove('open'); }); });
  }

  // WhatsApp CTAs
  var MSG = "Olá! Quero ser FRANQUEADO da Lavansec e receber a apresentação + COF. (vim pela LAVMIST)";
  ["ctaWhats","waFloat"].forEach(function(id){
    var e = document.getElementById(id);
    if(e){ e.href = wa(MSG); e.target = "_blank"; e.rel = "noopener"; }
  });
  document.querySelectorAll(".pick").forEach(function(a){
    var nome = a.dataset.modelo || "";
    a.addEventListener('click', function(){
      // mantém âncora para o formulário e pré-seleciona o assunto no WhatsApp via float
      var w = document.getElementById('waFloat');
      if(w) w.href = wa("Olá! Tenho interesse na franquia Lavansec no modelo " + nome + ". Pode me enviar a proposta?");
    });
  });

  // Lead form -> WhatsApp
  var f = document.getElementById('leadForm');
  if(f){
    f.addEventListener('submit', function(e){
      e.preventDefault();
      var d = new FormData(f);
      var L = ["*LEAD FRANQUIA — LAVMIST (Lavansec)*","",
        "👤 " + (d.get("nome")||"-"),
        "📱 " + (d.get("fone")||"-"),
        "📍 " + (d.get("cidade")||"-"),
        "💰 " + (d.get("capital")||"-")].join("\n");
      window.open(wa(L), "_blank");
    });
  }

  // Reveal + gauge
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){
        en.target.classList.add('in');
        if(en.target.id === 'gauge') en.target.classList.add('on');
        io.unobserve(en.target);
      }
    });
  }, {threshold:0.14, rootMargin:'0px 0px -6% 0px'});
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
  var g = document.getElementById('gauge'); if(g) io.observe(g);
})();
