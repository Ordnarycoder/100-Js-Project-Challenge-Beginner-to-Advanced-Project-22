var oReq = new XMLHttpRequest();
oReq.addEventListener("load", function () {
    let money_data = JSON.parse(this.responseText).data;
    console.log(money_data);  

    const dropdownItems = document.querySelectorAll(".dropdown-item");
    const dropdownButton = document.getElementById("dropdownMenuButton1");
    let money_amount = document.getElementById("money-amount");
    let result_area = document.getElementsByClassName("result-area")[0];  

    dropdownItems.forEach(item => {
        item.addEventListener("click", () => {
            let selectedCurrency = item.textContent;

            let convertedValue = parseFloat(money_amount.value) * money_data[selectedCurrency];

            result_area.value = `Converted Value: ${convertedValue.toFixed(2)} ${selectedCurrency}`;
        });
    });
});
oReq.open("GET", "https://api.freecurrencyapi.com/v1/latest");
oReq.setRequestHeader("apikey", "Your_Api_Key");
oReq.send();
