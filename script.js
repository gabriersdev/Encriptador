//Arrays de arrays
let matrizCodigo = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"] ];

//Declaração de variáveis que serão usadas em mais de um momento no código
const inputTexto = document.querySelector('#input-texto');
const mensagem = document.querySelector('#mensagem');
const boxAvisoMensagem = document.querySelector('#nenhuma-mensagem');
const btnCopiar = document.querySelector('#btn-copiar');
// let valueMensagem;

//Função que aciona o alerta do Sweet Alert
function alertaPopUp(icon, title, text, timer){
  timer == ""? timer == 10000 : timer;
  Swal.fire({
    icon: icon,
    title: title,
    text: text,
    timer: timer
  });
}

//Função que exibe ou não a mensagem de que não há nenhuma mensagem
function controleNenhumaMensagem(status){
  if(status == true){
    boxAvisoMensagem.style.display = 'none';
    mensagem.style.display = 'block';
    btnCopiar.style.display = 'block';
  }else if(status == false){
    boxAvisoMensagem.style.display = 'block';
    mensagem.style.display = 'none';
    btnCopiar.style.display = 'none';
  }
}

//Função que faz aciona a encriptação
function btnEncriptar(){
  if(!inputTexto.value == ""){
    const textoEncriptado = encriptar(inputTexto.value);
    mensagem.value = textoEncriptado;
    controleNenhumaMensagem(true);
  }else{
    setTimeout( () => {
      inputTexto.focus();
    }, 2500)
    controleNenhumaMensagem(false);
    alertaPopUp('warning', 'Digite algo', 'É preciso digitar algo para criptografar', 2000);
  }
}

//Função que codifica o texto
function encriptar(stringEncriptada){
  stringEncriptada = stringEncriptada.toLowerCase();  
  for(i = 0; i < matrizCodigo.length; i++){
    if(stringEncriptada.includes(matrizCodigo[i][0])){
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  return stringEncriptada;
}

//Função que decodifica o texto
function btnDescriptografar(){
  if(inputTexto.value == ""){
    alertaPopUp('warning', 'Digite algo', 'É preciso digitar algo para descriptografar', 2000);
    controleNenhumaMensagem(false);
  }else{
    console.log("clicou");
    controleNenhumaMensagem(true);
    const stringEncriptada = inputTexto.value;
    let stringDescriptografada = stringEncriptada.toLowerCase();  
    for(i = 0; i < matrizCodigo.length; i++){
      if(stringDescriptografada.includes(matrizCodigo[i][0])){
        stringDescriptografada = stringDescriptografada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
      }
    }
    // mensagem.value = "cyu";
    console.log(stringDescriptografada);
    mensagem.value = stringDescriptografada;
    // valueMensagem = stringDescriptografada;
  }
}

//Função que copia o conteúdo do text-area de mensagem
function copiar(){
  let textoMensagem = mensagem;
  if(!textoMensagem.value == "" || !textoMensagem.value == null){
    //Comando que copia de fato o conteúdo do campo mensagem
    textoMensagem.select();
    textoMensagem.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alertaPopUp('success', 'Copiado com sucesso', 'O conteúdo descriptografado foi copiado', 3000)
  }else{
    alertaPopUp('warning', 'Ooops!', 'Não há nada para copiar');
  }
}