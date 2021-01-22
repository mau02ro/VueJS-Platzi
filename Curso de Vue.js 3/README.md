# Curso de Vue.js 3

## ¿Qué es Vue?

_Librerías: Son una serie de herramientas provistas para que puedan ser usadas y facilitar el desarrollo_

_Frameworks: Estos no solo te proveen las herramientas para trabajar, sino que también te dicen cómo trabajarlas._

Vue es un **framework** _progresivo_, ya que te permite agregar capas, a medida que tu aplicación vaya creciendo puedes agregar más y más capas que necesites.

**Declarative Rendering**: Es con la que Vue trabaja todo, se encarga de conectar la información con la presentación. La información son todos los datos de tu aplicación, la presentación es la encargada de mostrar la información al usuario.

**Components**: Separan y encapsulan partes de la aplicación, son como pequeños legos que puedes usar para armar poco a poco la página.

## Declarative rendering con Vue.js

Una característica potente que posee Vue, y que tiene un impacto alto en su rendimiento y escalabilidad es su forma eficiente de actualizar el DOM a través del DOM Virtual. Esto sucede en el proceso de renderizado de nuestros componentes. Pero ¿qué rayos es DOM y DOM Virtual? Veamos que significa cada cosa. Cuando nos referimos a DOM o Modelo de objetos de documento nos referimos a una estructura de árbol, que contiene una serie de nodos, cada uno de estos nodos representa un elemento de nuestro HTML, un nodo puede tener nodos hijos. Imaginemos un blog, donde existen una serie de artículos, el contenedor de nuestro blog sera un node, y cada articulo representa un nodo hijo. El DOM tiene una serie de métodos que nos permiten acceder y cambiar el arbol completo o una parte de él, pero estos métodos tienen un gran problema y es que mientras mas grande es el DOM usarlos conlleva un mayor esfuerzo y esto afecta el rendimiento de nuestras aplicaciones. Por este motivo usamos el DOM Virtual que es una forma de representar nuestro DOM con objetos de Javascript, la razón de esto es que trabajar con objetos de javascript es mucho mas sencillo y eficiente. Por tanto, por cada nodo de nuestro DOM podemos crear un nodo virtual.

Vue aprovecha los nodos virtuales para convertirlos en un nodo del DOM. Vue esta pendiente de los cambios que ocurren en cada nodo, cuando ocurre un cambio verifica su nuevo estado con el anterior y decide si debe o no actualizar el DOM. Si se necesita actualizar el DOM, Vue solo actualiza los nodos que sufrieron cambios y el resto permanece intacto, esto es muy importante porque hace que nuestras aplicaciones reaccionen rápidamente y actualicen el contenido, ademas de esto Vue esta pendiente de aquellos nodos con propiedades reactivas.
