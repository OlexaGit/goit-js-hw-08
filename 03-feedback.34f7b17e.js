const e=document.querySelector(".feedback-form");console.log("hello"),e.addEventListener("submit",(function(l){l.preventDefault(),console.log("hello");const o=l.currentTarget.elements;console.log(o);const n=o.email.value;console.log(n);const s=o.message.value;if(0===n.length||0===s.length)alert("Please fill in all fields");else{const l={email:n,message:s};console.log(l),e.reset()}}));
//# sourceMappingURL=03-feedback.34f7b17e.js.map
