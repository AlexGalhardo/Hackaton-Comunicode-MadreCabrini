// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function verifica() {
  if (document.forms[0].email.value.length == 0) {
    alert('Por favor, informe o seu EMAIL.');
  document.frmEnvia.email.focus();
    return false;
  }
  return true;
}
 
function checarEmail(){
if( document.forms[0].email.value=="" 
   || document.forms[0].email.value.indexOf('@')==-1 
     || document.forms[0].email.value.indexOf('.')==-1 )
  {
     alert( "Por favor, informe um E-MAIL válido!" );
     return false;
  }
}

// valida se apenas números foram digitados
function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}

function fazerDoacaoCartaoDeCredito(){


  /*
  restApi=true & 
  empresa.hashEmpresa=gmxCheckoutGtwy & 
  venda.idVendaEmpresa=999999 & 
  venda.capturaAuto=true & 
  venda.descricaoFatura=Vendendo & 
  venda.consumidor.email=aleexgvieira@gmail.com & 
  venda.consumidor.telefone1=(16)981660321 & 
  venda.valor=99 & 
  cartaoCredito.portador=Alex%20Galhardo & 
  venda.consumidor.cpf=45672888828 & 
  cartaoCredito.numero=5401056100548984 & 
  cartaoCredito.mesValidade=05 & 
  cartaoCredito.anoValidade=2020 & 
  cartaoCredito.codSeguranca=153 & 
  cartaoCredito.bandeira=visa & 
  venda.modalidadeVenda=1 & 
  venda.consumidor.nome=Alex%20Galhardo
  */
  var linkURL = "https://www.gmxcheckout.com.br/txn/post?restApi=true&empresa.hashEmpresa=gmxCheckoutGtwy&venda.idVendaEmpresa=999999&venda.capturaAuto=true&venda.descricaoFatura=Vendendo&";

  const emailDoador = document.getElementById("email").value;
  linkURL += emailDoador.replace(/\s/g, "") + "&";

  const telefoneDoador = "(16)981660321";
  linkURL += telefoneDoador.replace(/\s/g, "") + "&";

  const valorDoacao = document.getElementById("valorDoacao").value;
  linkURL += valorDoacao + "&";

  const nomeCartaoDeCredito = document.getElementById("nomeCartaoDeCredito").value;
  linkURL += nomeCartaoDeCredito.replace(/\s/g, "") + "&";

  const CPFDoador = document.getElementById("CPF").value;
  linkURL += CPFDoador.replace(/\s/g, "") + "&";

  const numeroCartaoDeCredito = document.getElementById("nomeCartaoDeCredito").value;
  linkURL += numeroCartaoDeCredito.replace(/\s/g, "") + "&";

  const mes = document.getElementById("mes").value;
  linkURL += mes + "&";

  const ano = document.getElementById("ano");
  linkURL += ano + "&";

  const codigoSegurança = document.getElementById("codigoDeSeguranca").value;
  linkURL += codigoSegurança + "&";

  const bandeiraCartaoDeCredito = document.getElementById("bandeiraCartaoDeCredito").value;
  linkURL += bandeiraCartaoDeCredito + "&";

  linkURL += 1 + "&";

  var nomeDoador = document.getElementById("nomeDoador").value;
  // console.log(nomeDoador);
  linkURL += nomeDoador.replace(/\s/g, "");


  // verifique link do get request
  // console.log(linkURL);

  // Exemplo de requisição GET
  var ajax = new XMLHttpRequest();

  // Cria um evento para receber o retorno.
  ajax.onreadystatechange = function() {
    // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
    if (ajax.readyState == 4 && ajax.status == 200) {
      var data = ajax.responseText;
        // Retorno do Ajax
      console.log(data);
    }
  }

  // var link = "https://www.gmxcheckout.com.br/txn/post?restApi=true&empresa.hashEmpresa=gmxCheckoutGtwy&venda.idVendaEmpresa=999999&venda.capturaAuto=true&venda.descricaoFatura=Vendendo&venda.consumidor.email=aleexgvieira@gmail.com&venda.consumidor.telefone1=(16)981660321&venda.valor=99&cartaoCredito.portador=Alex%20Galhardo&venda.consumidor.cpf=45672888828&cartaoCredito.numero=5401056100548984&cartaoCredito.mesValidade=05&cartaoCredito.anoValidade=2020&cartaoCredito.codSeguranca=153&cartaoCredito.bandeira=visa&venda.modalidadeVenda=1&venda.consumidor.nome=Alex%20Galhardo";

    ajax.open("GET", linkURL, true);
    ajax.send();
}

/*
-d "restApi=true" \
    -d "venda.modalidadeVenda=1" \
    -d "empresa.hashEmpresa=gmxCheckoutGtwy" \
    -d "venda.descricaoFatura=teste venda" \
    -d "venda.consumidor.nome=Teste consumidor nome" \
    -d "venda.consumidor.email=teste@email.com" \
    -d "venda.consumidor.telefone1=(11) 1111-11111" \
    -d "venda.valor=100" \
    -d "venda.parcelas=1" \
    -d "cartaoCredito.portador=TESTE TESTE" \
    -d "venda.consumidor.cpf=559.343.990-71" \
    -d "cartaoCredito.numero=4012001037141112" \
    -d "cartaoCredito.mesValidade=05" \
    -d "cartaoCredito.anoValidade=2018" \
    -d "cartaoCredito.codSeguranca=123" \
    -d "cartaoCredito.bandeira=visa"
*/


