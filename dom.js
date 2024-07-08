/**
 * 
 * dom methods


Here are some common DOM methods:

1. getElementById(): Returns an element with the specified ID.

Example: document.getElementById("myId")

2. getElementsByTagName(): Returns a collection of elements with the specified tag name.

Example: document.getElementsByTagName("p")

3. getElementsByClassName(): Returns a collection of elements with the specified class name.

Example: document.getElementsByClassName("myClass")

4. querySelector(): Returns the first element that matches the specified CSS selector.

Example: document.querySelector("#myId")

5. querySelectorAll(): Returns a collection of elements that match the specified CSS selector.

Example: document.querySelectorAll(".myClass")

6. createElement(): Creates a new element with the specified tag name.

Example: document.createElement("p")

7. createTextNode(): Creates a new text node with the specified text content.

Example: document.createTextNode("Hello, world!")

8. appendChild(): Adds a new child element to the end of the specified parent element.

Example: parentElement.appendChild(newElement)

9. insertBefore(): Inserts a new element before the specified reference element.

Example: parentElement.insertBefore(newElement, referenceElement)

10. removeChild(): Removes a child element from the specified parent element.

Example: parentElement.removeChild(childElement)

11. replaceChild(): Replaces a child element with a new element.

Example: parentElement.replaceChild(newElement, oldElement)

12. innerHTML: Sets or gets the HTML content of an element.

Example: element.innerHTML = "<p>Hello, world!</p>"

13. outerHTML: Sets or gets the outer HTML content of an element.

Example: element.outerHTML = "<div><p>Hello, world!</p></div>"

14. textContent: Sets or gets the text content of an element.

Example: element.textContent = "Hello, world!"

15. addEventListener(): Adds an event listener to an element.

Example: element.addEventListener("click", function() { console.log("Clicked!"); })

16. removeEventListener(): Removes an event listener from an element.

Example: element.removeEventListener("click", function() { console.log("Clicked!"); })

17. dispatchEvent(): Dispatches an event to an element.

Example: element.dispatchEvent(new Event("click"))

18. cloneNode(): Clones an element.

Example: const clone = element.cloneNode(true)

19. hasChildNodes(): Returns a boolean indicating whether an element has child nodes.

Example: if (element.hasChildNodes()) { console.log("Element has child nodes"); }

20. normalize(): Normalizes the text content of an element.

Example: element.normalize()




<----------------------------------<>
 * DOM METHODS
 * 
 * --->finding html element
 * --->html elemrnts by id 
 * ---> html elements by tag name
 * --->html elements by class name
 * --->html elements by css selectors
 * --->html elements by html objects collections
 * 
 *
 */