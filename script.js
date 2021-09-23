let hero = ['Ivan'];
let native = ['York','Of'];
let destination = ['Poltava','In'];
let rainbow;

rainbow = hero.concat(native.reverse(),destination.reverse());
rainbow[0] = `Richard`;
rainbow[rainbow.length-1] = `Vain`;
rainbow.splice(3,0,'Gave','Battle');

console.log(rainbow);

let colors = [`red`,`orange`,`yellow`,`green`,`blue`,`indigo`,`violet`];

debugger;
for(let i=0; i<rainbow.length; i++){
	document.write (`
    <tr>
        <th style= background: ${colors[i]}; border-radius: 100%; width: 50px; height: 50px;> </th>   
    </tr>
    <tr>
        <th>${rainbow[i]}</th>
    </tr>
    `)
}