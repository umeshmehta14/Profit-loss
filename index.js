var initial = document.querySelector("#initial-price");
var quantity = document.querySelector("#stock-quantity");
var current = document.querySelector("#current-price");
var out = document.querySelector("#output");
var btn = document.querySelector("#btn");


function CalculateProfitLoss(ip ,qs, cs) {
    if(ip > cs){
        //lost logic here
        var loss = (ip - cs) * qs;
        var lossper = (loss/ip) * 100;
        var lossper1 = parseFloat(lossper).toFixed(2);
        out.style.color = 'red';
        ShowOutput(`Hey the loss is ${loss} and the percent is ${lossper1}%`, 1);
    }
    else if(cs > ip){
        // profit logic here
        var profit = (cs - ip) * qs;
        var profitper = (profit / ip) * 100;
        var profitper1 = parseFloat(profitper).toFixed(2);
        out.style.color = 'green';
        ShowOutput(`Hey the profit is ${profit} and the percent is ${profitper1}%`,0);
    }
    else{
        ShowOutput("No pain no gain and no gain no pain",0);
    }
}

function SubmitHandler() {
    var ip = Number(initial.value);
    var qty = Number(quantity.value);
    var curr = Number(current.value);
    if(ip === 0){
        ShowOutput("Stocks cannot be bought at 0 price", 1);
    }
    else{

        
        if(ip === 0 || qty === 0 || curr === 0)
        {
            ShowOutput("Enter All fields", 1);
        }
        else{
            if(ip < 0 || qty < 0 || curr < 0){
                ShowOutput("Enter Positive Number", 1);
            }
            else{
                CalculateProfitLoss(ip, qty, curr);
            }
        }
    }
    }


function ShowOutput(msg ,n) {
    if(n===1){
        out.style.color = "red";
    }
    else{
        out.style.color = "green";
    }
    out.innerText = msg;
}

btn.addEventListener("click", SubmitHandler)
