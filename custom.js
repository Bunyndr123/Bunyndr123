class Custom extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="d-flex">
            <select name="Hat" id="selectBtn">
                <option value="0">Hat none</option>
                <option value="1">Hat #1</option>
                <option value="2">Hat #2</option>
                <option value="3">Hat #3</option>
            </select>
            <select name="item" id="selectBtn2">
                <option value="0">item none</option>
                <option value="1">item #1</option>
                <option value="2">item #2</option>
                <option value="3">item #3</option>
            </select>
        </div>

        <div class="blockPic">
            <div class="blockPicSvg">
                <img class="img img1" id="img1" width="100px" height="100px" src="img/hat-celebration-svgrepo-com.svg" alt="">
                <img class="img img2" id="img2" width="100px" height="100px" src="img/hat-svgrepo-com (1).svg" alt="">
                <img class="img img3" id="img3" width="100px" height="100px" src="IMG/hat-svgrepo-com.svg" alt="">
                
                <img class="img img11" id="img4" width="100px" height="100px" src="img/camera-svgrepo-com.svg" alt="">
                <img class="img img12" id="img5" width="150px" height="150px" src="img/computer-svgrepo-com.svg" alt="">
                <img class="img img13" id="img6" width="100px" height="100px" src="img//phone-svgrepo-com.svg" alt="">
                <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" fill="currentColor" class="bi bi-person" xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 96 96">
                    <path
                        d="M 80 82 L 80 66 C 80 63.6 78.8 61.2 76.8 59.6 C 72.4 56 66.8 53.6 61.2 52 C 57.2 50.8 52.8 50 48 50 C 43.6 50 39.2 50.8 34.8 52 C 29.2 53.6 23.6 56.4 19.2 59.6 C 17.2 61.2 16 63.6 16 66 L 16 82 L 80 82 Z"/>
                </svg>
            </div>

        </div>
        `;
    document.querySelector("#selectBtn").addEventListener("click", this.btnHeat)
    document.querySelector("#selectBtn2").addEventListener("click", this.btnHeat2)
    }
    btnHeat(e) {
        console.log(e.target.value);
        switch (e.target.value) {
            case "0":
                document.getElementById("img1").style.display = "none"
                document.getElementById("img2").style.display = "none"
                document.getElementById("img3").style.display = "none"
                break;
            case "1":
                document.getElementById("img1").style.display = "flex"
                document.getElementById("img2").style.display = "none"
                document.getElementById("img3").style.display = "none"
                break;
            case "2": 
            document.getElementById("img1").style.display = "none"
            document.getElementById("img2").style.display = "flex"
            document.getElementById("img3").style.display = "none"
                break;

            case "3":
                document.getElementById("img1").style.display = "none"
                document.getElementById("img2").style.display = "none"
                document.getElementById("img3").style.display = "flex"
                break;
        
            default:
                break;
        }
    }
    btnHeat2(e) {
        console.log(e.target.value);
        switch (e.target.value) {
            case "0":
                document.getElementById("img4").style.display = "none"
                document.getElementById("img5").style.display = "none"
                document.getElementById("img6").style.display = "none"
                break;
            case "1":
                document.getElementById("img4").style.display = "block"
                document.getElementById("img5").style.display = "none"
                document.getElementById("img6").style.display = "none"
                break;
            case "2": 
            document.getElementById("img4").style.display = "none"
            document.getElementById("img5").style.display = "block"
            document.getElementById("img6").style.display = "none"
                break;

            case "3":
                document.getElementById("img4").style.display = "none"
                document.getElementById("img5").style.display = "none"
                document.getElementById("img6").style.display = "block"
                break;
        
            default:
                break;
        }
    }
}

customElements.define("custom-block", Custom);