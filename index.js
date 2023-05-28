let value=0

let title=document.createElement('h1')
title.setAttribute('id','title')
title.innerHTML='calculator'
document.body.appendChild(title)



let parent=document.createElement('div')
parent.setAttribute('id','parent')
document.body.appendChild(parent)

let child =document.createElement('div')
child.setAttribute('id','child')
parent.appendChild(child)

let input=document.createElement('input')
input.setAttribute('id','result')
input.setAttribute('type',"text")
input.setAttribute('placeholder',value)
// input.setAttribute('value','10')
child.appendChild(input)


let Row1=document.createElement('div')
Row1.setAttribute('id','Row1')
child.appendChild(Row1)

let button1=document.createElement('button')
button1.setAttribute('onclick','clr()')
button1.setAttribute('id','clear')
button1.innerHTML='C'
Row1.appendChild(button1)

let button2=document.createElement('button')
button2.setAttribute('onclick','Del()')
button2.innerHTML='D'
Row1.appendChild(button2)

let button3=document.createElement('button')
button3.setAttribute('onclick',"display('.')")
button3.innerHTML='.'
Row1.appendChild(button3)

let button4=document.createElement('button')
button4.setAttribute('onclick',"display('*')")
button4.innerHTML='*'
Row1.appendChild(button4)


let Row2=document.createElement('div')
Row2.setAttribute('id','Row2')
child.appendChild(Row2)

let button5=document.createElement('button')
button5.setAttribute('onclick',"display('7')")
button5.innerHTML='7'
Row2.appendChild(button5)

let button6=document.createElement('button')
button6.setAttribute('onclick',"display('8')")
button6.innerHTML='8'
Row2.appendChild(button6)

let button7=document.createElement('button')
button7.setAttribute('onclick',"display('9')")
button7.innerHTML='9'
Row2.appendChild(button7)

let button8=document.createElement('button')
button8.setAttribute('onclick',"display('/')")
button8.innerHTML='/'
Row2.appendChild(button8)


let Row3=document.createElement('div')
Row3.setAttribute('id','Row3')
child.appendChild(Row3)

let button9=document.createElement('button')
button9.setAttribute('onclick',"display('4')")
button9.innerHTML='4'
Row3.appendChild(button9)

let button10=document.createElement('button')
button10.setAttribute('onclick',"display('5')")
button10.innerHTML='5'
Row3.appendChild(button10)

let button11=document.createElement('button')
button11.setAttribute('onclick',"display('6')")
button11.innerHTML='6'
Row3.appendChild(button11)

let button12=document.createElement('button')
button12.setAttribute('onclick',"display('-')")
button12.setAttribute('id','subtract')
button12.innerHTML='-'
Row3.appendChild(button12)


let Row4=document.createElement('div')
Row4.setAttribute('id','Row4')
child.appendChild(Row4)

let button13=document.createElement('button')
button13.setAttribute('onclick',"display('1')")
button13.innerHTML='1'
Row4.appendChild(button13)

let button14=document.createElement('button')
button14.setAttribute('onclick',"display('2')")
button14.innerHTML='2'
Row4.appendChild(button14)

let button15=document.createElement('button')
button15.setAttribute('onclick',"display('3')")
button15.innerHTML='3'
Row4.appendChild(button15)

let button16=document.createElement('button')
button16.setAttribute('onclick',"display('+')")
button16.setAttribute('id','add')
button16.innerHTML='+'
Row4.appendChild(button16)


let Row5=document.createElement('div')
Row5.setAttribute('id','Row5')
child.appendChild(Row5)

let button17=document.createElement('button')
button17.setAttribute('onclick',"display('0')")
button17.innerHTML='0'
Row5.appendChild(button17)

let button18=document.createElement('button')
button18.setAttribute('onclick',"display('00')")
button18.innerHTML='00'
Row5.appendChild(button18)

let button19=document.createElement('button')
button19.setAttribute('onclick','solve()')
button19.setAttribute('id','equal')
button19.innerHTML='='
Row5.appendChild(button19)

let button20=document.createElement('button')
button20.setAttribute('onclick',"display('%')")
button20.setAttribute('class','button20')
button20.innerHTML='%'
Row5.appendChild(button20)


                                                                                

        let result=document.getElementById('result')


        function display(number){
                result.value=result.value+number
        }


        function  solve()
        {
        
           result.value=eval(result.value)


        }

        function clr()
        {
                result.value="";
        }

        function Del()
        {
                result.value=result.value.slice(0,-1)
                
        }
        
                      