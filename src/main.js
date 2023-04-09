 // Select tabs and tab buttons
      const tabs = document.querySelectorAll(".tab");
      const tabBtns = document.querySelectorAll(".tabbtn");

      // each tab button will have a  click event  listener 
      tabBtns.forEach((tabBtn) => {
        tabBtn.addEventListener("click", () => {

          // hiding all tabs
          tabs.forEach((tab) => {
            tab.classList.add("hidden");
          });

          // showing only the tab that this tab button should show
          const tab = tabBtn.getAttribute("data-tabopen");
          document.getElementById(tab).classList.remove("hidden");
          
          //  we will give same styles to all tab
          tabBtns.forEach((tabBtn) => {
            tabBtn.className =
              "tabbtn cursor-pointer font-semibold px-6 py-3 text-stone-700";
          });
 
          //  we will give special styles to the active tab
          tabBtn.className =
            "tabbtn cursor-pointer border-b-2 border-purple-600 px-6 py-3 text-purple-700 font-semibold";
        });
      });

      




      