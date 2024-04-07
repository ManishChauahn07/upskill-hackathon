const contactLink = document.getElementById("contact");
contactLink.addEventListener("click", scrollToFooter);

function scrollToFooter() {
    document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
  }

const service = document.getElementById("services");
service.addEventListener("click", scrollToService);

function scrollToService() {
document.getElementById("row").scrollIntoView({ behavior: "smooth" });
  }

  const about = document.getElementById("about");
  about.addEventListener("click", scrollToAbout);

  function scrollToAbout() {
    document.getElementById("yyy").scrollIntoView({ behavior: "smooth" });
  }