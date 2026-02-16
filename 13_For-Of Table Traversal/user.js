var data = [
    {
        id: 101,
        name: "Arjun",
        email: "arjun.kumar@gmail.com",
    },
    {
        id: 102,
        name: "Priya",
        email: "priya.sharma@yahoo.com",
    },
    {
        id: 103,
        name: "Rohit",
        email: "rohit_verma@outlook.com",
    },
    {
        id: 104,
        name: "Sneha",
        email: "sneha.reddy@gmail.com",
    },
    {
        id: 105,
        name: "Karthik",
        email: "karthik.naidu@gmail.com",
    },
    {
        id: 101,
        name: "Arjun",
        email: "arjun.kumar@gmail.com",
    },
    {
        id: 102,
        name: "Priya",
        email: "priya.sharma@yahoo.com",
    },
    {
        id: 103,
        name: "Rohit",
        email: "rohit_verma@outlook.com",
    },
    {
        id: 104,
        name: "Sneha",
        email: "sneha.reddy@gmail.com",
    },
    {
        id: 105,
        name: "Karthik",
        email: "karthik.naidu@gmail.com",
    },
]
function createTable() {
    var table = document.createElement("table");

    var tr = document.createElement("tr");

    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    var th3 = document.createElement("th");

    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);

    table.appendChild(tr);

    th1.innerText = "Id";
    th2.innerText = "Name";
    th3.innerText = "Email";

    table.style.margin = "30px auto";
    table.frame = "box";
    table.rules = "all";
    table.width = "900px";
    tr.style.backgroundColor = "black";
    tr.style.color = "white";
    table.cellPadding = "10px";
    var count=101;
    for (var item of data) {
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerText = count;
        td2.innerText = item.name;
        td3.innerText = item.email;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        tr.align = "center";
        table.appendChild(tr);
        count++;
    }

    var bdyref = document.getElementsByTagName("body");
    bdyref[0].appendChild(table);
}