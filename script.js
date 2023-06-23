function afterPageLoad(event) {
  // target all element after page load
  let productInfoBtns = document.querySelectorAll(".info_btn");
  let productInfoBoxes = document.querySelectorAll(".info_box");

  // get and set dynamic height of infobox to each box
  //   productInfoBoxes.forEach((infoBox) => {
  //     let infoBoxInner = infoBox.querySelector(".inner"); //target inner element inside infoBox
  //     let infoBoxHeight = infoBoxInner.clientHeight; // getting actual height in var infoBoxHeight;
  //     infoBox.style.setProperty("--dynHeight", infoBoxHeight + "px"); //set infoBoxHeight height in css var (--dynHeight)
  //     infoBox.style.height = 0; // set initial Height 0 after getting actual height in var infoBoxHeight;
  //   });

  //toggle class to infobox for slideToggle effect
  //   productInfoBtns.forEach((infoBtn) => {
  //     infoBtn.onclick = (e) => {
  //       let currBtn = e.target;
  //       let currBtnParent = currBtn.closest(".field_wrap");
  //       let nearInfoBox = currBtnParent.querySelector(".info_box");
  //       nearInfoBox.classList.toggle("show");
  //       nearInfoBox.style.marginTop = "10px";
  //     };
  //   });

  // check if element is not avail in dom onload
  document.onclick = (event) => {
    let currElem = event.target;
    let isCheck = currElem.classList.contains("info_btn");
    if (isCheck) {
      let currBtnParent = currElem.closest(".field_wrap");
      let nearInfoBox = currBtnParent.querySelector(".info_box");
      let infoBoxInner = nearInfoBox.querySelector(".inner");
      let infoBoxHeight = infoBoxInner.clientHeight;
      nearInfoBox.style.setProperty("--dynHeight", infoBoxHeight + "px");
      nearInfoBox.classList.toggle("show");
      nearInfoBox.style.marginTop = "10px";
    }
  };

  // disable wear date dynamically
  let deliveryDateFields = document.querySelectorAll(".delivery_date");

  // get curr date
  let customizedDateMax = new Date();
  let addDays = customizedDateMax.getDate() + 7; //for disable default date
  customizedDateMax.setDate(addDays);

  // get year
  let cYear = customizedDateMax.getFullYear();

  // get month
  let cMonth = customizedDateMax.getUTCMonth() + 1;
  if (cMonth < 10) {
    cMonth = "0" + cMonth;
  }

  // get date
  let cDate = customizedDateMax.getDate();
  if (cDate < 10) {
    cDate = "0" + cDate;
  }
  let minDate = `${cYear}-${cMonth}-${cDate}`;

  deliveryDateFields.forEach((dateField) => {
    dateField.setAttribute("min", minDate);
  });

  //   product modal start
  let productModalWrap = document.querySelector(".product_modal_wrap");
  let productModalInner = document.querySelector(".product_modal");
  let productModalCloseBtn = document.querySelector(
    ".product_modal_wrap .product_modal .cross"
  );
  let productModalBtns = document.querySelectorAll(".product_modal_button");
  let modalHtml = `<div class="row">
  <div class="col-lg-6">
    <div class="product_image">
      <div class="img_box">
        <img
          src="https://images.unsplash.com/photo-1550639525-c97d455acf70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=726&q=80"
          alt=""
        />
      </div>
    </div>
  </div>

  <div class="col-lg-6">
    <div class="product_detail">
      <div class="product_head">
        <h4>Black Dress</h4>
        <h3>Rs. 34,350.45</h3>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Suscipit harum, similique obcaecati iste optio neque
            eligendi corporis quod aliquam reiciendis rem quibusdam
            laboriosam quis modi. Odit nulla explicabo fugit iusto!
        </p>
      </div>
      <div class="product_body">
        <div class="field_wrap">
          <div class="input_wrap">
            <input
              type="date"
              min="2023-06-30"
              max=""
              class="delivery_date"
            />
            <button
              class="info_btn tooltip_btn"
              data-tooltip="Click to see Estimate Delivery"
            >
              ?
            </button>
          </div>
          <div
            class="info_box"
          >
            <div class="inner">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Pariatur eum
              </p>
              <p>
                omnis reiciendis, eius deleniti esse, dolorem sed
                quidem. Ipsa.
              </p>
            </div>
          </div>
        </div>
        <div class="field_wrap">
          <h4>Size</h4>
          <div class="input_wrap">
            <label for="size7">
              <input
                type="radio"
                checked="checked"
                name="size"
                value="7"
                id="size7"
              />
              <span class="custom_check">7</span>
            </label>
            <label for="size8">
              <input
                type="radio"
                checked="checked"
                name="size"
                value="8"
                id="size8"
              />
              <span class="custom_check">8</span>
            </label>
            <label for="size9">
              <input
                type="radio"
                checked="checked"
                name="size"
                value="9"
                id="size9"
              />
              <span class="custom_check">9</span>
            </label>
          </div>
        </div>
        <div class="field_wrap">
          <h4>Color</h4>
          <div class="input_wrap">
            <label for="colorBlue">
              <input
                type="radio"
                checked="checked"
                name="color"
                value="blue"
                id="colorBlue"
              />
              <span class="custom_check">Blue</span>
            </label>
            <label for="colorBlack">
              <input
                type="radio"
                checked="checked"
                name="color"
                value="black"
                id="colorBlack"
              />
              <span class="custom_check">Black</span>
            </label>
            <label for="colorPink">
              <input
                type="radio"
                checked="checked"
                name="color"
                value="pink"
                id="colorPink"
              />
              <span class="custom_check">Pink</span>
            </label>
          </div>
        </div>
        <div class="field_wrap">
          <div class="input_wrap">
            <input type="submit" value="Buy Now" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
  if (productModalBtns.length != 0) {
    productModalBtns.forEach((btn) => {
      btn.onclick = (e) => {
        productModalWrap.classList.add("show");
        productModalInner.insertAdjacentHTML("beforeend", modalHtml);
      };
    });
    productModalCloseBtn.onclick = (e) => {
      productModalWrap.classList.remove("show");
      setTimeout(() => {
        productModalInner.querySelector(".row").remove();
      }, 500);
    };
  }
}
// infoBox.classList.add("show");
window.addEventListener("load", afterPageLoad);
