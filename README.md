
**AEM Frontend Technical Test**

Descripción
Este proyecto es una prueba técnica orientada a frontend, enfocada en simular el desarrollo de componentes para Adobe Experience Manager (AEM) utilizando tecnologías modernas de frontend.

Debido a las limitaciones de licenciamiento y configuración de AEM, el proyecto implementa una simulación de AEM basada en React + Vite, manteniendo la arquitectura, responsabilidades y conceptos clave utilizados en proyectos reales con AEM.

Tecnologías utilizadas
 - React 
 - TypeScript 
 - Vite 
 - HTML5 / CSS3 
 - Git

Cómo ejecutar el proyecto
**npm install
npm run dev**

El proyecto estará disponible en http://localhost:5173.
Arquitectura del proyecto

    src/
    ├── components/ # Componentes reutilizables (AEM Components)
    ├── services/ # Consumo de datos (simulación de Sling Models / APIs)
    ├── data/ # Datos mockeados (simulación de JCR)
    ├── types/ # Tipos TypeScript

**Simulación de conceptos AEM**
**AEM Components**
Cada componente React representa un componente AEM reutilizable y desacoplado del contenido.
Ejemplo:
ProductCard → Componente AEM
ProductList → Contenedor del componente
HTL (Sightly)

Los conceptos de HTL se reflejan de la siguiente manera:

 - data-sly-list → Uso de Array.map() 
 - data-sly-test → Render condicional
 - data-sly-use → Importación de servicios y modelos de datos

**Sling Models**
Los Sling Models se simulan mediante servicios frontend que retornan información en formato JSON.

**Ejemplo:**
getProducts() simula un Sling Model o servlet exponiendo datos a través de una API REST.

**Client Libraries (ClientLibs)**
Las Client Libraries de AEM se representan mediante:

Bundles de JavaScript generados por Vite
Archivos CSS importados por componente o a nivel global

En un entorno real de AEM, estos recursos se empaquetarían como ClientLibs y se referenciarían desde HTL.

 Integración con APIs REST
 El proyecto consume datos simulados mediante servicios asincrónicos, representando el consumo de APIs REST desde AEM hacia servicios externos o backend.

**Decisiones técnicas**
Se priorizó una arquitectura clara y documentada.
Se optó por simular AEM para evitar dependencias de licenciamiento.
El enfoque fue demostrar conocimiento conceptual y práctico de AEM desde frontend.

**Limitaciones**

 - No se implementó un entorno real de AEM debido a licencias.
 - No se incluyen workflows ni author/publish, ya que no eran críticos
   para el alcance del ejercicio.
 - No se agregaron pruebas automatizadas por limitaciones de tiempo.

**Posibles mejoras**

 - Implementación de pruebas unitarias.
 - Integración real con APIs externas.
 - Implementación en AEM as a Cloud Service.

**Autor**
**José Almanzan**
**Frontend / React Tech Lead**