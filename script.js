let output = document.getElementById('output');

  const Opration =  (value)=>{
    output.value += value
  }

  const Ansewr = ()=>{
    let ans = eval(output.value);
    output.value = ans;
  }

  const Cleare = ()=>{
    output.value = '';
  }

  const OneDigitRemove = ()=>{
    let outputResult =output.value;
    let str = outputResult.toString();

        ans = str.substring(0,str.length-1);
        if(ans.length <= 0){
            output.value = ''
        }else{
            output.value = eval(ans);
        }
  }


  document.body.addEventListener('keypress' , (event)=>{
    if(event.key == 'c'){
        OneDigitRemove();
    }else if(event.key == "A"){
        Cleare();
    }else if(event.key == "Enter"){
        let str = output.value.toString();
        if(str.length == 0){
            alert("plz enter input")
        }else{
           
        }
        Ansewr();
    }else if(event.key == '0' || event.key == "1" || event.key == "2" || event.key == "3"  || event.key == "4" || event.key == "5" || event.key == "6" || event.key == "7" || event.key == "8" || event.key == "9" || event.key == "%" || event.key == "/" || event.key == "*" || event.key == "." || event.key == "+" || event.key == "-" || event.key == "="){
      Opration(event.key);
    }
  })
