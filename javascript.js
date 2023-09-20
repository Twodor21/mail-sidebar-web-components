const sidebarButtonTemplate = document.createElement("template");
sidebarButtonTemplate.innerHTML = `
<slot name="icon"></slot>
<span class="description"></span>
<span class='count'></span>
`;

class appSidebarButton extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    console.log(" Element is added to DOM");

    this.shadowRoot.append(sidebarButtonTemplate.content.cloneNode(true));

    const description = this.getAttribute("text");
    const count = this.getAttribute("unreadCount");

    const descriptionVariable = this.shadowRoot.querySelector(".description");
    const countVariable = this.shadowRoot.querySelector(".count");

    descriptionVariable.innerHTML = description;
    descriptionVariable.style = "padding-left: 10px";

    countVariable.innerHTML = count;
    countVariable.style = "float: right; padding-right: 5px; line-height: 25px";

    if (count === "0") {
      countVariable.style = "visibility: hidden; ";
    }
  }

  disconnectedCallback() {
    console.log("Element is removed from DOM");
  }
}

window.customElements.define("app-sidebar-button", appSidebarButton);

// const sidebarButton1 = document.createElement("app-sidebar-button");
// document.body.append(sidebarButton1);
