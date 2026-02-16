function crateTable() {
    var table = document.createElement("table"); //<table> </table>

    var tr1 = document.createElement("tr"); //<tr> </tr>
    var tr2 = document.createElement("tr"); //<tr> </tr>
    var tr3 = document.createElement("tr"); //<tr> </tr>
    var tr4 = document.createElement("tr"); //<tr> </tr>

    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    var th3 = document.createElement("th");

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var td6 = document.createElement("td");

    var td7 = document.createElement("td");
    var td8 = document.createElement("td");
    var td9 = document.createElement("td");

    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);

    tr2.appendChild(td1);
    tr2.appendChild(td2);
    tr2.appendChild(td3);

    tr3.appendChild(td4);
    tr3.appendChild(td5);
    tr3.appendChild(td6);

    tr4.appendChild(td7);
    tr4.appendChild(td8);
    tr4.appendChild(td9);

    table.appendChild(tr1);
    table.appendChild(tr2);
    table.appendChild(tr3);
    table.appendChild(tr4);

    th1.innerText = "ID";
    th2.innerText = "Name";
    th3.innerText = "Email";

    td1.innerText = 101;
    td2.innerText = "Raj";
    td3.innerText = "Raj@gamil.com";

    td4.innerText = 102;
    td5.innerText = "Ram";
    td6.innerText = "ram@gmail.com";

    td7.innerText = 103;
    td8.innerText = "gowtham";
    td9.innerText = "gowtham@gmail.com";

    table.frame = "box";
    table.rules = "all";
    table.width = "850px";
    table.style.margin ="50px auto";
    table.cellPadding="10px";

    tr1.style.color="white";
    tr1.style.backgroundColor="black";


    tr1.align="center";
    tr2.align="center";
    tr3.align="center";
    tr4.align="center";



    var bdyref = document.getElementsByTagName("body");
    bdyref[0].appendChild(table);

}