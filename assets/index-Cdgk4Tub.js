(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1.2,t={minX:-32,maxX:32,minZ:-22,maxZ:22,wallHeight:4.5,wallThickness:.3},n=3.5,r=[-12,-4,4,12],i=r.map((e,n)=>({id:`R${n+1}`,kind:`recepcion`,x:t.minX,z:e,facing:-1})),a=r.map((e,n)=>({id:`D${n+1}`,kind:`despacho`,x:t.maxX,z:e,facing:1})),o=[{id:`recepcion`,name:`Recepción`,color:`#2e86de`,minX:-31.6,maxX:-22,minZ:-21.6,maxZ:21.6},{id:`almacen`,name:`Almacén`,color:`#8e6fd8`,minX:-20.5,maxX:13.5,minZ:-21.6,maxZ:21.6},{id:`preparacion`,name:`Preparación de pedidos`,color:`#f39c12`,minX:15,maxX:23.5,minZ:-21.6,maxZ:21.6},{id:`despacho`,name:`Despacho`,color:`#27ae60`,minX:25,maxX:31.6,minZ:-21.6,maxZ:21.6}],s={startX:-18,bays:11,bayWidth:2.7,palletsPerBay:2,levels:4,levelHeight:1.6,depth:1.1,flue:.2,aisle:3.2,rowIds:[`A`,`B`,`C`,`D`,`E`,`F`],uprightHeight:6.3},c=(()=>{let e=s.depth*2+s.flue,t=s.rowIds.length*e+(s.rowIds.length-1)*s.aisle,n=s.bays*s.bayWidth;return s.rowIds.map((r,i)=>({id:r,z:-t/2+e/2+i*(e+s.aisle),minX:s.startX,maxX:s.startX+n}))})(),l=2*s.bays*s.levels*s.palletsPerBay,u=c.slice(1).map((e,t)=>(c[t].z+e.z)/2),d={crossZ:17.6,longX:[-21.25,14.25,24.25],width:1.1},f=3.4,p=(()=>{let e=o.find(e=>e.id===`preparacion`),t=(e.minX+e.maxX)/2+.6;return{stationsZ:[-14,-8,-2,4,10],tableX:t,shelfX:t+2,faceX:16.5,faceDZ:[-.6,.6],outputX:t+.35,outputDZ:3}})(),m=[-24.9,-26.2,-27.5,-28.8],h=[26.1,27.35,28.6,29.85],g=[-.7,.7],_={minX:-84,maxX:84,minZ:-46,maxZ:40},v={x:0,width:14},y=[{id:`espera-recepcion`,name:`Playa de espera · Recepción`,firstX:-78,stalls:7,spacing:4.4,z:-44},{id:`espera-despacho`,name:`Playa de camiones · Despacho`,firstX:51.6,stalls:7,spacing:4.4,z:-44}],b={minX:18,maxX:38,minZ:46,maxZ:53},x={minX:16,maxX:46,minZ:55,maxZ:61},S={z:68,width:9,minX:-150,maxX:150},C={minX:-62,maxX:62,minZ:-28,maxZ:32,width:2.6},w=9.4,T=[{title:`Un recorrido rápido por la pantalla`,text:`En menos de un minuto se muestra para qué sirve cada parte. Se puede saltar en cualquier momento y repetir desde la ayuda (botón ?).`},{target:`.stage-chip`,title:`El escenario`,text:`Muestra qué se está jugando. Con un clic se releen la situación, el problema y las metas, o se cambia de escenario.`},{target:`.simbar`,title:`El reloj del turno`,text:`El turno va de 8:00 a 18:00 y arranca en pausa para planificar. ▶ (o la barra espaciadora) pone el reloj en marcha; ×5 y ×20 lo aceleran; la flecha circular vuelve a las 8:00 y la bandera adelanta hasta el final para ver el reporte.`},{target:`.side-panel`,title:`Las decisiones`,text:`Acá se decide cuántos recursos trabajan, cómo se organiza el trabajo y cuándo se compra. Lo que tiene candado no se puede cambiar en este escenario. Los cambios rigen en el momento, también con el turno en marcha.`},{target:`.statsbar`,title:`Los indicadores`,text:`Cómo va el turno: camiones esperando, productos sin stock, pedidos a tiempo, qué tan ocupados están los recursos, el costo y el almacén. Con un clic en un indicador se explica qué mide y cómo mejorarlo.`},{target:`.notifications`,title:`Las notificaciones`,text:`Lo que va pasando en el hub: camiones que llegan, compras a proveedores, salidas. Las que dicen «Atención» avisan un problema.`},{title:`El hub`,text:`Arrastrar con el mouse mueve el mapa y la rueda acerca o aleja. Con un clic en un camión, un montacargas o un preparador se ve qué está haciendo en ese momento.`},{target:`.clue-btn`,title:`Avisos y pistas`,text:`Durante el turno aparecen avisos con una lamparita que señalan dónde mirar. Si no se sabe cómo seguir, se puede pedir una pista; en los escenarios con metas, cada pista baja la mejor medalla posible.`},{target:`.play-btn`,title:`A planificar`,text:`Primero conviene leer las metas y ajustar las decisiones con el reloj en pausa. Cuando todo esté listo, ▶.`}],E={pausaInicial:{title:`El reloj está en pausa`,text:`El turno todavía no empezó: es el momento de planificar con el panel de la derecha. Con las decisiones listas, ▶ (o la barra espaciadora) pone el reloj en marcha.`},sinCambios:{title:`El turno sigue como empezó`,text:`Hasta ahora el hub trabaja con las decisiones iniciales. Las decisiones del panel se pueden cambiar con el turno en marcha y rigen en el momento.`},cola:[{title:`Se está formando una cola`,text:`Hay {n} camiones esperando en la playa para descargar. Cada hora de espera se paga como estadía.`},{title:`La cola sigue`,text:`¿Qué frena la recepción: cuántos camiones se descargan a la vez, o lo rápido que se retira lo descargado? Los medidores de utilización ayudan a responderlo.`}],pisoLleno:[{title:`La descarga se frenó`,text:`El piso de recepción está lleno: los pallets que bajan de los camiones no tienen dónde quedar.`},{title:`¿Quién libera el piso?`,text:`¿Quién retira los pallets del piso de recepción? ¿Le da el tiempo con todas las tareas que tiene?`}],montacargas:[{title:`Montacargas al límite`,text:`Los montacargas estuvieron ocupados casi todo el tiempo en la última hora.`},{title:`Un recurso al límite`,text:`Cuando un recurso trabaja casi sin pausa, cualquier pico se convierte en espera. ¿Qué tareas dependen de los montacargas?`}],pocoStock:{title:`Queda poco de {producto}`,text:`Quedan unos {n} pallets de {producto} en el hub. ¿Alcanzan hasta que llegue lo pedido? La tabla de compras muestra lo que viene en camino.`},sinStock:[{title:`{producto} se quedó sin stock`,text:`No queda {producto} en el hub: los pedidos que lo necesitan quedan esperando.`},{title:`¿Cuándo se pidió?`,text:`¿En qué momento se hizo el pedido al proveedor y cuántas horas tarda en llegar? ¿Cuánto se vende mientras tanto?`}],sinStockRecepcion:[{title:`{producto} se quedó sin stock`,text:`No queda {producto} para preparar pedidos.`},{title:`¿Dónde está la mercadería?`,text:`Lo que se compró, ¿está en camino, esperando en la playa o en el piso de recepción?`}],pedidosAcumulados:[{title:`Pedidos acumulados`,text:`Hay {n} pedidos esperando para empezar a prepararse.`},{title:`¿Qué hacen los preparadores?`,text:`¿Están ocupados todo el tiempo, esperan mercadería o esperan que les retiren el pedido terminado? Un clic en un preparador muestra qué hace.`}],preparadoresEsperando:[{title:`Preparadores esperando`,text:`En la última media hora hubo preparadores parados esperando que repongan su lugar de picking.`},{title:`¿Llega a tiempo la reposición?`,text:`¿En qué momento se pide reponer un lugar de picking? ¿El montacargas llega antes de que se vacíe?`}],pedidosTarde:{title:`Pedidos que salen tarde`,text:`Ya salieron {n} pedidos tarde, con una multa por cada uno. El indicador «Pedidos a tiempo» muestra cómo sigue.`},costo:[{title:`El costo viene alto`,text:`A este ritmo, el costo pasaría el tope de {tope} que piden las metas.`},{title:`¿En qué se va el dinero?`,text:`¿Qué rubro pesa más? La ficha del indicador «Costo del turno» lo detalla rubro por rubro.`}],ociosos:{title:`Montacargas sin trabajo`,text:`En la última hora los montacargas trabajaron menos de la mitad del tiempo. Se pagan por hora aunque estén parados.`}};function D(e,t){return e.replace(/\{(\w+)\}/g,(e,n)=>n in t?String(t[n]):e)}var O={recepcion:{title:`Recepción`,kind:`Zona`,description:`Aquí se descargan los camiones de los proveedores. Antes de que la mercadería entre al almacén se controla que lo recibido coincida con lo pedido: cantidades, estado y documentación. Lo que tiene diferencias queda retenido hasta resolverse.`,concepts:[`Control de recepción`,`Orden de compra y remito`,`Tiempo de descarga`,`Mercadería pendiente de ubicar`],courses:[`Logística de Entrada`,`Gestión de la Recepción y Preparación de Pedidos`]},almacen:{title:`Almacén`,kind:`Zona`,description:`Las estanterías guardan la mercadería en pallets hasta que un pedido la necesite. Dónde se ubica cada producto define cuánto se recorre después: lo que más se mueve conviene tenerlo cerca de la salida y a baja altura.`,concepts:[`Capacidad y ocupación`,`Clasificación ABC`,`Ubicación fija o caótica`,`FIFO / FEFO`],courses:[`Sistemas de Almacenamiento I`,`Sistemas de Almacenamiento II`,`Gestión de Stocks`]},preparacion:{title:`Preparación de pedidos`,kind:`Zona`,description:`Los preparadores toman de las estanterías los productos de cada pedido (picking), los verifican y los embalan. Suele ser la actividad que más mano de obra consume en un centro de distribución.`,concepts:[`Picking por pedido, por lote y por zona`,`Productividad (líneas por hora)`,`Errores de preparación`,`Embalaje`],courses:[`Gestión de la Recepción y Preparación de Pedidos`,`Logística de Salida`]},despacho:{title:`Despacho`,kind:`Zona`,description:`Los pedidos ya preparados esperan en carriles marcados frente a cada muelle hasta que se cargan. Se agrupan por camión y por ruta para aprovechar la capacidad de carga y cumplir los horarios de entrega.`,concepts:[`Consolidación de carga`,`Ocupación del camión`,`Ventanas horarias`,`Entregas a tiempo y completas (OTIF)`],courses:[`Logística de Salida`,`COMEX & Transporte de Salida`]}},k={title:`Estantería`,kind:`Infraestructura`,description:`Estantería selectiva de pallets, doble (espalda con espalda). Cada pallet tiene acceso directo desde el pasillo, lo que da mucha flexibilidad a cambio de usar más superficie que otros sistemas, como el almacenaje en bloque o drive-in. En este hub cada pallet que llega va a cualquier lugar libre (ubicación caótica) y para reponer se saca siempre el más antiguo (FIFO).`,concepts:[`Estantería selectiva`,`Ubicación caótica`,`FIFO`,`Altura vs. accesibilidad`,`Ancho de pasillo`],courses:[`Sistemas de Almacenamiento I`,`Gestión de Stocks`]};function A(e,t){let n=t===`recepcion`;return{title:`Muelle ${e}`,kind:n?`Muelle de recepción`:`Muelle de despacho`,description:n?`Puerta con rampa niveladora donde el camión estaciona marcha atrás para descargar. La cantidad de muelles limita cuántos camiones se atienden a la vez: si llegan más, esperan en la playa. Lo descargado queda en el piso hasta que un montacargas lo guarda: si se llena, la descarga se frena.`:`Puerta con rampa niveladora por donde se cargan los pedidos en el camión. Cada muelle atiende salidas de reparto con horario fijo; si la carga no está lista a tiempo, el camión queda inmovilizado y la entrega se atrasa.`,concepts:n?[`Capacidad de muelles`,`Agenda de turnos (citas)`,`Tiempo de permanencia del camión`,`Colas`]:[`Secuencia de carga`,`Tiempo de carga`,`Programación de salidas`],courses:n?[`Logística de Entrada`,`Transporte Interno y Movimiento de Mercaderías`]:[`Logística de Salida`,`Transporte Interno y Movimiento de Mercaderías`]}}var j={"espera-recepcion":{title:`Playa de espera · Recepción`,kind:`Patio de maniobras`,description:`Los camiones de proveedores esperan aquí cuando todos los muelles de recepción están ocupados. Cada hora de espera tiene un costo: chofer y vehículo parados, y a veces multas por demora (estadía).`,concepts:[`Colas de camiones`,`Tiempo de espera`,`Costo de estadía`,`Agenda de turnos`],courses:[`Logística de Entrada`,`Diseño y Construcción de Centros Logísticos`]},"espera-despacho":{title:`Playa de camiones · Despacho`,kind:`Patio de maniobras`,description:`Camiones vacíos que esperan su turno para cargar. Tener flota disponible en el momento justo es tan importante como tener los pedidos listos.`,concepts:[`Disponibilidad de transporte`,`Planificación de flota`,`Transporte propio o tercerizado`],courses:[`Logística de Salida`,`Outsourcing Logístico`]},porteria:{title:`Portería`,kind:`Control de acceso`,description:`Todo vehículo que entra o sale se registra aquí: quién es, qué trae o qué se lleva y a qué muelle va. Es el primer punto de control y el comienzo de la trazabilidad de la carga.`,concepts:[`Control de ingreso y egreso`,`Agenda de citas`,`Trazabilidad`,`Seguridad patrimonial`],courses:[`Logística de Entrada`,`Legislación Logística`]},oficinas:{title:`Oficinas`,kind:`Administración`,description:`Desde aquí se planifica la operación: turnos de recepción, órdenes de preparación y salidas de camiones. Todo se apoya en un sistema de gestión de almacén (WMS) que sabe qué hay, dónde está y qué hay que hacer.`,concepts:[`Sistema de gestión de almacén (WMS)`,`Indicadores de gestión (KPI)`,`Planificación de la operación`],courses:[`Logismática`,`Metodología de Diagnóstico Logístico`]},carriles:{title:`Circulaciones`,kind:`Seguridad y flujos`,description:`Las líneas pintadas separan los recorridos: azul para los camiones en el patio, rojo para los montacargas dentro de la nave y verde para las personas. Separar flujos evita accidentes y ordena el movimiento.`,concepts:[`Separación de flujos`,`Señalización`,`Prevención de accidentes`],courses:[`Transporte Interno y Movimiento de Mercaderías`,`Seguridad Laboral y Salud Ocupacional`]}},ee={montacargas:{title:`Montacargas`,kind:`Equipo de manipulación`,description:`Autoelevador contrapesado: mueve pallets entre los muelles, las estanterías y las zonas de trabajo, y los sube a los niveles altos. Cuántos hay y cómo se organizan sus recorridos define la velocidad de todo el hub.`,facts:[{label:`Capacidad típica`,value:`2.500 kg`}],concepts:[`Equipos de manipulación`,`Utilización del equipo`,`Recorridos vacíos`,`Seguridad en la operación`],courses:[`Transporte Interno y Movimiento de Mercaderías`,`Seguridad Laboral y Salud Ocupacional`]},operario:{title:`Operario`,kind:`Personal`,description:`Las personas siguen siendo el recurso central de un hub: descargan, controlan, preparan y cargan. Usan elementos de protección personal (casco y chaleco de alta visibilidad).`,concepts:[`Productividad`,`Dimensionamiento de personal`,`Elementos de protección personal`,`Ergonomía`],courses:[`Gestión de Procesos`,`Seguridad Laboral y Salud Ocupacional`]},puesto:{title:`Puesto de preparación`,kind:`Puesto de trabajo`,description:`Mesa donde se arma, verifica y embala cada pedido. Un buen diseño del puesto reduce movimientos innecesarios y errores.`,concepts:[`Verificación del pedido`,`Embalaje`,`Diseño del puesto de trabajo`],courses:[`Gestión de la Recepción y Preparación de Pedidos`]},envolvedora:{title:`Envolvedora de film`,kind:`Equipo`,description:`Envuelve los pallets con film estirable para que la carga no se desarme durante el transporte. Un pallet bien unitizado se carga más rápido y llega en mejor estado.`,concepts:[`Unitización de la carga`,`Protección de la mercadería`],courses:[`Logística de Salida`]},preparador:{title:`Preparador de pedidos`,kind:`Personal`,description:`Arma los pedidos de los clientes: con un carro recorre los lugares de picking de los productos del pedido, toma las cajas, las apila en el pallet del pedido y lo envuelve con film. Si un lugar de picking se vacía antes de que lo repongan, se queda esperando.`,concepts:[`Picking por pedido`,`Productividad (cajas por hora)`,`Tiempo improductivo`,`Reposición del área de picking`],courses:[`Gestión de la Recepción y Preparación de Pedidos`,`Gestión de Procesos`]}},M={espera:{title:`Camiones esperando`,kind:`Indicador de recepción`,description:`Camiones de proveedores en la playa de espera y tiempo promedio desde que llegan a portería hasta que tienen muelle. Las esperas crecen rápido cuando los muelles están casi siempre ocupados: es la teoría de colas. Se reducen habilitando más muelles, descargando más rápido (que los montacargas retiren a tiempo lo descargado) o repartiendo mejor las llegadas.`,concepts:[`Teoría de colas`,`Tasa de llegadas y de servicio`,`Costo de estadía`,`Agenda de turnos`],courses:[`Logística de Entrada`,`Investigación Operativa`,`Simulación`]},quiebres:{title:`Quiebres de stock`,kind:`Indicador de inventario`,description:`Productos que se terminaron en el hub. Mientras falta un producto, los pedidos que lo llevan no se pueden preparar y se atrasan. Pasa cuando el punto de reorden es bajo para lo que se vende durante la demora del proveedor, o cuando la cantidad pedida es chica. Un punto de reorden más alto da más seguridad, a cambio de tener más stock (y más camiones).`,concepts:[`Punto de reorden`,`Demanda durante el tiempo de reposición`,`Stock de seguridad`,`Nivel de servicio`],courses:[`Gestión de Stocks`,`Abastecimiento`]},"a-tiempo":{title:`Pedidos a tiempo`,kind:`Indicador de servicio`,description:`Parte de los pedidos despachados que salieron en su camión y en hora (con hasta 5 minutos de tolerancia). Un pedido llega tarde si su camión sale atrasado o si no estuvo listo y pasó a la salida siguiente. Depende de toda la cadena: stock, reposición, preparación y carga. Cada pedido tarde cuesta una multa.`,concepts:[`Entregas a tiempo y completas (OTIF)`,`Nivel de servicio`,`Cuello de botella`],courses:[`Logística de Salida`,`Gestión de la Cadena de Suministros`]},utilizacion:{title:`Utilización`,kind:`Indicador de recursos`,description:`Qué parte del tiempo disponible estuvieron trabajando los muelles, los montacargas y los preparadores en lo que va del turno. Muy baja indica recursos de más (cuestan igual); cerca del 90 % o más, el recurso está saturado y probablemente sea el cuello de botella que demora todo lo demás.`,concepts:[`Utilización`,`Capacidad`,`Cuello de botella`,`Dimensionamiento de recursos`],courses:[`Gestión de Procesos`,`Investigación Operativa`]},costo:{title:`Costo del turno`,kind:`Indicador económico`,description:`Costo acumulado desde las 8:00: recursos habilitados (muelles, montacargas, preparadores), estadía de camiones esperando, multas por pedidos tarde y almacenamiento. El costo por pedido despachado permite comparar decisiones: a veces sumar un recurso sale más barato que los atrasos que evita.`,concepts:[`Costo logístico total`,`Costo por pedido`,`Compromisos entre costo y servicio`],courses:[`Administración de Empresas`,`Logística Empresarial`]},ocupacion:{title:`Ocupación del almacén`,kind:`Indicador de almacenamiento`,description:`Posiciones de pallet ocupadas sobre el total. Por encima del 85–90 % cuesta encontrar lugar y todo se hace más lento. Mirar qué productos ocupan el espacio: muchas veces lo llenan los de baja rotación (clase C), mientras faltan los que más se venden.`,concepts:[`Capacidad y ocupación`,`Clasificación ABC`,`Sobrestock`,`Costo de almacenamiento`],courses:[`Sistemas de Almacenamiento I`,`Gestión de Stocks`]}},te={A:`Es un producto clase A: de los pocos que concentran la mitad de lo que piden los clientes. Por eso su lugar de picking está en el centro, donde los preparadores caminan menos, y se repone seguido.`,B:`Es un producto clase B: rotación media. Junto con los A suman la mayor parte del movimiento del hub.`,C:`Es un producto clase C: se pide poco. Suele ser el que más lugar ocupa en las estanterías en relación con lo que se vende.`};function ne(e,t){return{title:`Lugar de picking: ${e}`,kind:`Producto clase ${t}`,description:`Pallet del que los preparadores toman las cajas de este producto. Cuando le quedan pocas cajas, un montacargas trae el pallet más antiguo de la estantería. ${te[t]}`,concepts:[`Clasificación ABC`,`Ubicación fija de picking`,`Reposición del área de picking`,`Quiebre de stock`],courses:[`Gestión de Stocks`,`Gestión de la Recepción y Preparación de Pedidos`]}}var re={proveedor:{title:`Camión de proveedor`,kind:`Transporte de entrada`,description:`Trae mercadería de un proveedor: la mayoría viene porque el hub hizo un pedido (cuando el stock bajó del punto de reorden) y algunos llegan sin aviso. Se registra en portería y, si no hay muelle libre, espera en la playa; cada hora de espera la cobra el transportista (estadía).`,concepts:[`Punto de reorden`,`Tiempo de reposición del proveedor`,`Colas y tiempo de espera`,`Costo de estadía`],courses:[`Logística de Entrada`,`Transporte Interno y Movimiento de Mercaderías`]},flota:{title:`Camión de reparto`,kind:`Flota propia`,description:`Camión propio del hub. Cada salida de reparto tiene una hora fija y lleva los pedidos de una ruta. Se acerca al muelle un rato antes, se carga y sale; si falta algún pedido, espera y la salida se atrasa.`,concepts:[`Horario de salida`,`Consolidación de carga`,`Entregas a tiempo (OTIF)`,`Planificación de flota`],courses:[`Logística de Salida`,`COMEX & Transporte de Salida`]}},ie=[{id:`turno-libre`,order:0,title:`Turno libre`,subtitle:`Un día normal para explorar`,courses:[`Todas las asignaturas`],story:`Un día normal de trabajo en el hub: llegan camiones de proveedores, los pedidos de los clientes se preparan y salen en los camiones de reparto.`,problem:`No hay un problema que resolver: es para conocer el hub, probar decisiones y ver cómo cambian los indicadores.`,concept:{title:`El hub como sistema`,text:`Un centro de distribución es una cadena de procesos conectados: recepción, almacenamiento, reposición, preparación y despacho. Lo que pasa en uno afecta a los demás. Un recurso que falta en un lugar (un montacargas, un muelle, un preparador) se nota en otro (camiones esperando, pedidos atrasados), y el recurso que sobra cuesta igual aunque esté parado.`},questions:[`¿Qué recurso estuvo más ocupado durante el día? ¿Qué pasaría si se quita uno de ese tipo?`,`¿Qué productos ocupan más lugar en el almacén en relación con lo que se venden?`,`¿Cuál fue el rubro que más pesó en el costo del turno?`],editable:`all`,goals:[],chart:`cost`,clues:[`Para empezar: ▶ y mirar durante una hora cómo se mueve la mercadería, desde los camiones que llegan hasta los que salen con los pedidos.`,`Con un clic en un montacargas o en un preparador se ve qué está haciendo. ¿Hay alguno que nunca para? ¿Alguno que espera?`,`Probar un cambio por vez (por ejemplo, un montacargas menos) y reiniciar: el día se repite igual, así que la diferencia en los indicadores se debe solo a ese cambio.`]},{id:`recepcion-saturada`,order:1,title:`Recepción saturada`,subtitle:`Colas de camiones después de un fin de semana largo`,courses:[`Logística de Entrada`,`Investigación Operativa`,`Simulación`],story:`Es martes, después de un fin de semana largo. Los proveedores que no pudieron entregar llegan todos juntos: unos 20 camiones en el día, más de la mitad antes de las 10:00. El hub viene trabajando con 2 muelles de recepción y 4 montacargas. La gerencia fijó un tope de $ 160.000 para el costo del turno.`,problem:`Si no se hace nada, los camiones esperan en promedio más de 3 horas en la playa (alguno casi 6), los montacargas no dan abasto, falta mercadería en preparación y casi ningún pedido sale a tiempo. Las estadías y las multas se disparan.`,concept:{title:`Colas, capacidad y cuello de botella`,text:`Una cola se forma cuando llegan clientes (acá, camiones) más rápido de lo que se los puede atender. La espera no crece de a poco: cuando los recursos están ocupados casi todo el tiempo, se dispara. En recepción la capacidad la ponen dos recursos en cadena: los muelles (cuántos camiones se descargan a la vez) y los montacargas (que retiran lo descargado para dejar lugar). Agrandar solo uno corre el cuello de botella al otro. También se puede actuar sobre las llegadas: una agenda de turnos reparte los camiones en el día sin agregar recursos. Si los turnos son muy seguidos la cola se forma igual; si son muy espaciados, la mercadería llega tarde y puede faltar.`},questions:[`¿Por qué abrir todos los muelles, sin agregar montacargas, no alcanza?`,`¿Conviene tener los recursos reforzados todo el día o solo en el pico? ¿Qué cambia en el costo?`,`¿Qué ventajas y qué riesgos tiene la agenda de turnos para el hub y para los proveedores?`,`Si hubiera que elegir una sola solución para todos los días después de un feriado, ¿cuál sería y por qué?`],params:{unplannedPerHour:[5,4,2.5,1.5,1,.8,.6,.4,.3,0],palletsPerTruck:[9,12]},decisions:{receivingDocks:2,forklifts:4},editable:[`receivingDocks`,`forklifts`,`appointments`],goals:[{metric:`avgWait`,max:25,text:`Espera promedio de los camiones: 25 minutos o menos`},{metric:`maxWait`,max:60,text:`Ningún camión espera más de 1 hora`},{metric:`onTime`,min:95,text:`Al menos 95 % de los pedidos a tiempo`},{metric:`cost`,max:16e4,text:`Costo del turno de $ 160.000 o menos`}],criteria:{money:{metric:`cost`,label:`Dinero`,gold:128e3,silver:14e4,bronze:16e4},time:{metric:`avgWait`,label:`Tiempo`,gold:8,silver:18,bronze:25},service:{metric:`onTime`,label:`Servicio`,gold:99,silver:97,bronze:95},extra:{metric:`equipmentHours`,label:`Recursos`,gold:120,silver:130,bronze:140}},chart:`queue`,clues:[`Conviene mirar la playa de espera y el piso de recepción a media mañana, a velocidad ×1: ¿dónde se acumula la mercadería?`,`En recepción trabajan dos recursos en cadena: los muelles descargan y los montacargas retiran lo descargado. ¿Cuál de los dos marca el ritmo? Los medidores de utilización lo muestran.`,`Además de agregar recursos, se puede actuar sobre las llegadas. ¿Qué pasaría si los camiones que vienen sin aviso no llegaran todos juntos?`,`La capacidad se paga por hora. ¿Hace falta la misma capacidad a las 9:00 que a las 15:00?`],teacher:{objective:`Comprender cómo se forma una cola cuando los camiones llegan más rápido de lo que se los puede atender, identificar cuál es el recurso que limita (muelles o montacargas) y comparar tres tipos de solución: agregar capacidad, ajustarla en el tiempo (reforzar solo en el pico) y ordenar las llegadas (agenda de turnos).`,duration:`45 a 60 minutos: 5 de presentación, 10 de planificación, 10 a 15 de turno (a ×1 hasta media mañana y después ×5) y 20 de reporte y puesta en común.`,preparation:`Formar grupos de 2 a 4 estudiantes, cada uno con una PC. Proyectar el hub y mostrar en 5 minutos la playa de espera, los muelles de recepción y los montacargas. No adelantar las soluciones: la gracia es que cada grupo descubra el cuello de botella.`,steps:[`Cada grupo escribe su nombre en la pantalla de inicio y elige «Recepción saturada».`,`Leer la presentación. Antes de tocar nada, pedir que anoten una hipótesis: ¿qué recurso va a faltar y por qué?`,`Planificar con el reloj en pausa y jugar a ×1 al menos hasta las 10:30, mirando la playa de espera y el piso de recepción. Después se puede acelerar.`,`En el reporte, leer «Qué pasó» y comparar con la hipótesis.`,`Repetir el escenario con otra estrategia (la tabla de la clase guarda todos los intentos).`,`Puesta en común con la tabla de la clase proyectada: ¿qué solución ganó en dinero, en tiempo, en recursos? ¿Cuál elegirían para una empresa real y por qué?`],mistakes:[`Abrir los 4 muelles sin sumar montacargas: entran más camiones, pero lo descargado se acumula en el piso, la descarga se frena y la preparación se queda sin mercadería. Casi ningún pedido sale a tiempo.`,`Sumar solo montacargas: la cola sigue, porque con 2 muelles no se alcanza a atender la llegada de la mañana.`,`Agenda con turnos muy seguidos (20 minutos o menos): no evita la cola. Muy espaciados (más de 45): la mercadería llega tarde.`,`Dejar todo reforzado el día entero: con 4 muelles y 7 montacargas cumple las metas, pero es la solución más cara.`,`Poner todo al máximo (4 muelles y 10 montacargas): no hay cola, pero el costo (unos $ 188.000) pasa el tope de $ 160.000. Más recursos no siempre es mejor.`],discussion:[{question:`¿Por qué abrir todos los muelles, sin agregar montacargas, no alcanza?`,answer:`Porque recepción tiene dos recursos en cadena. Al abrir muelles se descargan más camiones a la vez, pero los montacargas no retiran los pallets a tiempo: el piso se llena y la descarga se frena. El cuello de botella se corre de los muelles a los montacargas.`},{question:`¿Conviene tener los recursos reforzados todo el día o solo en el pico?`,answer:`La espera es casi igual (unos 19 minutos), pero reforzar solo hasta el mediodía ahorra cerca de $ 19.000 en el turno. La capacidad se paga por hora: conviene acompañar la demanda.`},{question:`¿Qué ventajas y riesgos tiene la agenda de turnos?`,answer:`Ventajas: elimina casi toda la espera sin agregar recursos y es la solución más barata. Riesgos: los proveedores tienen que aceptar el turno y la mercadería entra más tarde; si los turnos son muy espaciados, puede faltar stock.`}],variants:[`Más difícil: arrancar con 3 montacargas, o sumar llegadas en las primeras horas (unplannedPerHour en el archivo del escenario).`,`Más fácil: arrancar con 3 muelles de recepción.`,`Para Investigación Operativa: registrar llegadas por hora y la utilización de los muelles, y compararlas con lo que predice un modelo de colas M/M/c.`],solutions:[{label:`Sin cambios`,decisions:{}},{label:`Abrir los 4 muelles`,decisions:{receivingDocks:4}},{label:`Todo al máximo (4 muelles y 10 montacargas)`,decisions:{receivingDocks:4,forklifts:10}},{label:`Agenda cada 40′ + 3 muelles + 5 montacargas`,decisions:{appointments:40,receivingDocks:3,forklifts:5}},{label:`Agenda cada 40′ + 6 montacargas`,decisions:{appointments:40,forklifts:6}},{label:`4 muelles y 7 montacargas hasta las 12:00; después 2 y 5`,decisions:{receivingDocks:4,forklifts:7},changes:[{at:`12:00`,set:{receivingDocks:2,forklifts:5}}]},{label:`4 muelles y 7 montacargas todo el día`,decisions:{receivingDocks:4,forklifts:7}}]}},{id:`quiebres-de-stock`,order:2,title:`Quiebres de stock`,subtitle:`Una promoción vacía las estanterías`,courses:[`Gestión de Stocks`,`Abastecimiento`,`Gestión de la Cadena de Suministros`],story:`Empezó la promoción de verano: Bebidas y Agua mineral se venden un 70 % más que de costumbre. Como todos los clientes de esos proveedores piden más, están desbordados y tardan de 4 a 5 horas en entregar (normalmente tardan 2,5 a 3,5). En el sistema siguen cargados los puntos de reorden de siempre. La gerencia fijó un tope de $ 150.000 para el costo del turno.`,problem:`Si no se hace nada, Bebidas y Agua se terminan antes del mediodía: hay más de 5 horas sin stock en el día, muchos pedidos no se pueden preparar y casi 4 de cada 10 salen tarde. Las multas por atraso se llevan buena parte del costo del turno. La compra expresa evita los quiebres, pero su recargo se paga en cada compra: usada sin cuidado, se pasa del tope.`,concept:{title:`Punto de reorden y stock de seguridad`,text:`El punto de reorden dice cuándo pedir: hay que pedir cuando lo que queda alcanza justo para cubrir la venta mientras el proveedor tarda en entregar. Si la venta sube o la demora se alarga, el punto de reorden tiene que subir; si no, el pedido llega cuando el producto ya se terminó. La cantidad a pedir dice cuánto: pedir más no evita el quiebre si se pide tarde, pero hace que se pida menos veces. El stock de seguridad (pedir un poco antes de lo justo) protege contra las sorpresas, a cambio de tener más mercadería guardada. La compra expresa acorta la demora, pero cuesta un recargo en cada compra.`},questions:[`¿Por qué pedir más cantidad, sin cambiar el punto de reorden, casi no ayuda?`,`¿Cuántos pallets de Bebidas se venden durante las 4 a 5 horas que tarda el proveedor? ¿Cómo se compara con el punto de reorden elegido?`,`¿Cuándo conviene pagar la compra expresa y cuándo subir el punto de reorden?`,`Después de la promoción, ¿qué pasaría si se deja el punto de reorden alto?`],products:{Bebidas:{demand:1.7,leadTime:[4,5],initialPallets:22},"Agua mineral":{demand:1.7,leadTime:[4,5],initialPallets:19}},editable:[`reorderPoint`,`orderQty`,`express`],goals:[{metric:`stockoutMinutes`,max:30,text:`30 minutos o menos sin stock en todo el día`},{metric:`onTime`,min:95,text:`Al menos 95 % de los pedidos a tiempo`},{metric:`occupancyEnd`,max:80,text:`Almacén ocupado al 80 % o menos al cierre`},{metric:`cost`,max:15e4,text:`Costo del turno de $ 150.000 o menos`}],criteria:{money:{metric:`cost`,label:`Dinero`,gold:137e3,silver:143e3,bronze:15e4},time:{metric:`stockoutMinutes`,label:`Tiempo sin stock`,gold:.5,silver:5,bronze:30},service:{metric:`onTime`,label:`Servicio`,gold:99,silver:97,bronze:95},extra:{metric:`stockEndA`,label:`Inventario`,gold:15,silver:20,bronze:27}},chart:`stock`,watch:[`Bebidas`,`Agua mineral`],clues:[`Conviene mirar la tabla de compras durante la mañana: ¿qué productos bajan más rápido, y cuándo se les hace el pedido al proveedor?`,`El punto de reorden dice cuándo pedir: el pedido tiene que salir cuando lo que queda todavía alcanza para cubrir la venta mientras el proveedor tarda en llegar.`,`Para estimar la venta de Bebidas, se puede anotar cuánto baja su stock en una hora de turno. ¿Cuánto se vende en las 4 a 5 horas que tarda el proveedor?`,`Pedir más cantidad no adelanta el pedido. La compra expresa acorta la demora, pero el recargo se paga en cada compra: ¿cuántas compras se harían en el día?`],teacher:{objective:`Calcular el punto de reorden a partir de la venta durante el tiempo de reposición del proveedor, distinguir cuándo pedir (punto de reorden) de cuánto pedir (cantidad) y comparar el costo de tener stock de seguridad con el de pagar una compra expresa.`,duration:`50 a 60 minutos: 5 de presentación, 15 de planificación con cálculo, 10 de turno y 20 de reporte y puesta en común.`,preparation:`Repasar la idea de punto de reorden (venta por hora × demora del proveedor) antes de jugar, o dejar que la descubran con el gráfico de stock del reporte. Conviene tener a mano calculadora o planilla.`,steps:[`Cada grupo elige «Quiebres de stock» y lee la presentación.`,`Con el reloj en pausa, mirar en la tabla de compras el stock de Bebidas y Agua y su punto de reorden. Pedir que estimen la venta por hora (la tarjeta de cada lugar de picking ayuda) y la comparen con la demora de 4 a 5 horas.`,`Ajustar punto de reorden y cantidad, o activar la compra expresa, y jugar el turno.`,`En el reporte, mirar el gráfico de stock: ¿en qué momento se pidió?, ¿llegó antes o después de quedarse en cero?`,`Repetir con otra estrategia y comparar en la tabla de la clase (dinero contra inventario al cierre).`,`Puesta en común: ¿qué solución conviene si la promoción dura un día? ¿y si dura un mes?`],mistakes:[`Subir solo la cantidad a pedir: casi no cambia nada, porque el pedido sale igual de tarde.`,`Subir el punto de reorden de Bebidas y olvidarse del Agua (o al revés).`,`Subir el punto de reorden muy por encima de lo necesario: se cumplen las metas, pero queda más mercadería inmovilizada y llegan varios camiones juntos.`,`Encender solo la compra expresa: no hay quiebres, pero se hacen 5 compras con recargo (unos $ 30.000) y el costo pasa el tope de $ 150.000.`,`Usar la compra expresa solo a la mañana y apagarla: a la tarde las compras vuelven a tardar 4 a 5 horas y los quiebres reaparecen.`],discussion:[{question:`¿Por qué pedir más cantidad, sin cambiar el punto de reorden, casi no ayuda?`,answer:`Porque la cantidad decide cuánto llega, no cuándo. El pedido se dispara igual de tarde, el proveedor tarda lo mismo y el producto se termina antes de que llegue.`},{question:`¿Cuántos pallets de Bebidas se venden durante la demora del proveedor?`,answer:`Con la promoción se venden unos 4 pallets por hora; con 4 a 5 horas de demora son entre 16 y 20 pallets. El punto de reorden original (12) queda corto; con 22 a 24 se cubre la demora con un pequeño margen de seguridad.`},{question:`¿Cuándo conviene la compra expresa y cuándo subir el punto de reorden?`,answer:`La compra expresa sirve para una emergencia o una situación corta: no exige tener más stock, pero cuesta en cada compra. Sola cuesta unos $ 166.000 y pasa el tope; combinada con pedir más cantidad por vez (menos compras, menos recargos) queda justo debajo, cerca de $ 149.000. Recalcular el punto de reorden cuesta unos $ 136.000, porque no tiene recargo: si la demanda alta va a durar, es la mejor opción.`},{question:`Después de la promoción, ¿qué pasa si se deja el punto de reorden alto?`,answer:`Se sigue pidiendo para una venta que ya no existe: el stock crece, ocupa lugar y cuesta almacenarlo. Los parámetros de inventario hay que revisarlos cuando cambia la demanda.`}],variants:[`Más difícil: subir la demanda de la promoción (demand en el archivo del escenario) o alargar la demora del proveedor.`,`Para Gestión de Stocks: pedir que calculen el stock de seguridad para un nivel de servicio dado y lo comparen con lo que funcionó en el simulador.`],solutions:[{label:`Sin cambios`,decisions:{}},{label:`Solo pedir más cantidad (24 y 24)`,decisions:{orderQty:[24,24,10,10,8,6,6,6,6,6]}},{label:`Punto de reorden 22 y 20, cantidad 16`,decisions:{reorderPoint:[22,20,9,7,6,5,5,4,4,4],orderQty:[16,16,10,10,8,6,6,6,6,6]}},{label:`Punto de reorden 24 y 21, cantidad 20 y 18`,decisions:{reorderPoint:[24,21,9,7,6,5,5,4,4,4],orderQty:[20,18,10,10,8,6,6,6,6,6]}},{label:`Punto de reorden 30 y 28, cantidad 36`,decisions:{reorderPoint:[30,28,9,7,6,5,5,4,4,4],orderQty:[36,36,10,10,8,6,6,6,6,6]}},{label:`Solo compra expresa`,decisions:{express:!0}},{label:`Compra expresa hasta las 12:00`,decisions:{express:!0},changes:[{at:`12:00`,set:{express:!1}}]},{label:`Compra expresa + cantidad 30 y 30`,decisions:{express:!0,orderQty:[30,30,10,10,8,6,6,6,6,6]}}]}},{id:`pedidos-urgentes`,order:3,title:`Pedidos urgentes`,subtitle:`Cierre de mes: llegan muchos más pedidos`,courses:[`Logística de Salida`,`Gestión de Procesos`,`Gestión de la Recepción y Preparación de Pedidos`],story:`Es cierre de mes y los clientes quieren tener mercadería antes de fin de período: llegan un 30 % más de pedidos que en un día normal, unos 145. Los camiones de reparto se cargan un poco más (14 pallets). El hub arranca con 4 preparadores, 5 montacargas y 3 muelles de despacho.`,problem:`Si no se hace nada, la preparación no da abasto: los pedidos se acumulan, las salidas se atrasan una detrás de otra y solo 1 de cada 7 pedidos llega a tiempo. Sumar gente ayuda poco: aun con el máximo de preparadores, más montacargas y todos los muelles, sale tarde casi 1 de cada 3.`,concept:{title:`Cuello de botella y métodos de trabajo`,text:`La capacidad de un proceso la marca su recurso más lento: el cuello de botella. Cuando ya no se pueden sumar recursos (hay 5 puestos de preparación y no más), hay que cambiar la forma de trabajar. Preparar por lotes junta dos pedidos de la misma salida en un solo recorrido: se camina la mitad y se envuelve un solo pallet, pero al final hay que separar y etiquetar las cajas de cada pedido, y eso también lleva tiempo. La reposición anticipada lleva mercadería al lugar de picking antes de que se vacíe, para que el preparador no espere. Un método nuevo rara vez alcanza solo: rinde cuando se lo acompaña con la capacidad justa en el cuello de botella. Mejorar los métodos suele ser más barato que agregar personas, pero exige organización.`},questions:[`¿Cuál era el cuello de botella al empezar? ¿Cambió después de las decisiones tomadas?`,`¿Por qué sumar montacargas no mejoró casi nada la preparación?`,`¿Cómo se compara el costo por pedido de agregar personal con el de cambiar los métodos de trabajo?`,`¿Qué riesgos tiene preparar por lotes en un hub real (errores, pedidos mezclados, prioridades)?`],params:{ordersPerHour:[18.2,16.9,15.6,15.6,11.7,14.3,15.6,14.3,9.1,0],truckCapacity:14},products:{Bebidas:{initialPallets:20},"Agua mineral":{initialPallets:17},"Fideos y arroz":{initialPallets:13},"Lácteos larga vida":{initialPallets:11},Limpieza:{initialPallets:9}},decisions:{pickers:4,forklifts:5,shippingDocks:3,reorderPoint:[16,13,11,9,8,5,5,4,4,4],orderQty:[14,14,12,12,10,6,6,6,6,6]},editable:[`pickers`,`forklifts`,`shippingDocks`,`batchPicking`,`replenishEarly`],goals:[{metric:`onTime`,min:85,text:`Al menos 85 % de los pedidos a tiempo`},{metric:`costPerOrder`,max:1200,text:`Costo por pedido despachado de $ 1.200 o menos`}],criteria:{money:{metric:`costPerOrder`,label:`Dinero`,gold:850,silver:1e3,bronze:1200},time:{metric:`avgDelay`,label:`Atraso`,gold:.5,silver:2,bronze:5},service:{metric:`onTime`,label:`Servicio`,gold:99,silver:93,bronze:85},extra:{metric:`staffHours`,label:`Personal`,gold:90,silver:100,bronze:110}},chart:`late`,clues:[`Conviene mirar la zona de preparación a velocidad ×1: ¿los preparadores están ocupados, esperan mercadería o esperan que les retiren el pedido terminado? Un clic en cada uno lo muestra.`,`El cuello de botella es el recurso que marca el ritmo de todo el proceso. Agregar capacidad en otro lugar solo agrega costo.`,`Cuando ya no se pueden sumar puestos, queda cambiar la forma de trabajar. Cada método tiene una ventaja y también un trabajo extra: ¿quién hace ese trabajo extra?`,`Un método nuevo rinde cuando se lo acompaña con la capacidad justa en el cuello de botella.`],teacher:{objective:`Identificar el cuello de botella de un proceso (la preparación de pedidos), entender por qué agregar recursos tiene un límite y comparar mejoras de método (preparación por lotes, reposición anticipada) con aumentos de personal, en servicio y en costo por pedido.`,duration:`45 a 60 minutos: 5 de presentación, 10 de planificación, 10 a 15 de turno y 20 de reporte y puesta en común.`,preparation:`Mostrar la zona de preparación: los lugares de picking (un pallet por producto), los preparadores caminando con el carro y los pallets de pedidos esperando al montacargas. Mencionar que hay solo 5 puestos.`,steps:[`Cada grupo elige «Pedidos urgentes» y lee la presentación.`,`Primer intento sugerido: «más gente» (subir preparadores, montacargas o muelles). Jugar y leer el reporte.`,`Mirar la utilización y «Qué pasó»: ¿dónde está el cuello de botella?, ¿los preparadores esperan mercadería?`,`Segundo intento: probar los métodos de trabajo. Lo más probable es que enciendan los dos y vean que no alcanza: es el momento de preguntar dónde sigue estando el cuello de botella.`,`Tercer intento: combinar los métodos con los recursos justos en el cuello de botella.`,`Comparar en la tabla de la clase el costo por pedido y las horas de personal de cada solución.`,`Puesta en común: ¿qué cambia en una empresa real al trabajar por lotes? (organización, separación y etiquetado, errores, prioridades).`],mistakes:[`Sumar montacargas y muelles de despacho: casi no mejora, porque el cuello de botella está en la preparación.`,`Encender los dos métodos sin tocar el personal: por lotes se camina menos, pero separar y etiquetar las cajas de cada pedido le suma casi 5 horas de trabajo a la preparación, que sigue siendo el cuello de botella. Con 4 preparadores, menos de la mitad de los pedidos sale a tiempo.`,`Lotes y 5 preparadores, sin reposición anticipada: cumple justo (86 %), porque los preparadores pierden tiempo esperando que repongan los lugares de picking.`,`Poner todo al máximo (5 preparadores, 7 montacargas, 4 muelles) sin cambiar los métodos: mejora, pero no llega a la meta y sale caro.`,`Sumar personal con reposición anticipada (sin lotes): llega al 86 % a tiempo, pero cada pedido cuesta unos $ 1.265 y pasa el tope.`,`Encender los dos métodos y además poner todo al máximo: todos los pedidos salen a tiempo, pero el costo por pedido (unos $ 1.276) pasa el tope. Los montacargas y muelles extra sobran.`],discussion:[{question:`¿Cuál era el cuello de botella al empezar?`,answer:`La preparación: los 4 preparadores no alcanzan para los pedidos del cierre de mes y además esperan reposición. Los muelles y los montacargas tienen capacidad de sobra.`},{question:`¿Por qué sumar montacargas no mejoró casi nada?`,answer:`Porque no eran el recurso que limitaba. Agregar capacidad donde no está el cuello de botella solo agrega costo.`},{question:`¿Cómo se compara el costo por pedido de agregar personal con el de cambiar los métodos?`,answer:`Ni los métodos solos ni el personal solo alcanzan. Lo que funciona es combinarlos: lotes, reposición anticipada y un preparador más dan 100 % a tiempo con unos $ 834 por pedido. En cambio, sumar personal y montacargas con solo reposición anticipada llega al 86 % con cerca de $ 1.265 por pedido, por encima del tope de $ 1.200.`},{question:`¿Por qué encender los dos métodos, sin más, no alcanzó?`,answer:`Porque un método nuevo también tiene su costo: por lotes se camina la mitad, pero hay que separar y etiquetar las cajas de cada pedido. Ese trabajo cae sobre los mismos preparadores, que ya eran el cuello de botella. En una empresa real pasa lo mismo: cambiar la forma de trabajar se planifica junto con la capacidad del puesto que limita.`},{question:`¿Qué riesgos tiene preparar por lotes en un hub real?`,answer:`Mezclar pedidos (por eso hay que separarlos, etiquetarlos y verificarlos bien, como hace el simulador antes de envolver), demorar un pedido urgente esperando a su compañero y necesitar un sistema que arme los lotes.`}],variants:[`Más difícil: subir los pedidos por hora (ordersPerHour) o bajar los preparadores iniciales a 3.`,`Más fácil o más difícil: cambiar el tiempo de separar y etiquetar cada caja en la preparación por lotes (batchSortPerCase en los parámetros; hoy 6 segundos).`,`Para Gestión de Procesos: dibujar el proceso de preparación, marcar el cuello de botella y estimar su capacidad en pedidos por hora.`],solutions:[{label:`Sin cambios`,decisions:{}},{label:`Todo al máximo (5 preparadores, 7 montacargas, 4 muelles)`,decisions:{pickers:5,forklifts:7,shippingDocks:4}},{label:`Reposición anticipada + 5 preparadores + 6 montacargas`,decisions:{replenishEarly:!0,pickers:5,forklifts:6}},{label:`Los dos métodos (lotes + reposición anticipada), personal inicial`,decisions:{batchPicking:!0,replenishEarly:!0}},{label:`Lotes + 5 preparadores`,decisions:{batchPicking:!0,pickers:5}},{label:`Lotes + 5 preparadores + 6 montacargas`,decisions:{batchPicking:!0,pickers:5,forklifts:6}},{label:`Los dos métodos + 5 preparadores`,decisions:{batchPicking:!0,replenishEarly:!0,pickers:5}},{label:`Los dos métodos y todo al máximo (5, 10 y 4)`,decisions:{batchPicking:!0,replenishEarly:!0,pickers:5,forklifts:10,shippingDocks:4}}]}}].sort((e,t)=>e.order-t.order),ae=ie.find(e=>e.id===`turno-libre`),oe={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},se={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ce=1e3,le=1001,ue=1002,N=1003,de=1004,fe=1005,pe=1006,me=1007,he=1008,ge=1009,_e=1010,ve=1011,ye=1012,be=1013,xe=1014,Se=1015,Ce=1016,we=1017,Te=1018,Ee=1020,De=35902,Oe=35899,ke=1021,Ae=1022,je=1023,P=1026,Me=1027,Ne=1028,Pe=1029,Fe=1030,Ie=1031,Le=1033,F=33776,Re=33777,I=33778,L=33779,ze=35840,Be=35841,Ve=35842,He=35843,Ue=36196,We=37492,Ge=37496,Ke=37488,qe=37489,Je=37490,Ye=37491,Xe=37808,Ze=37809,Qe=37810,$e=37811,et=37812,tt=37813,nt=37814,rt=37815,it=37816,at=37817,ot=37818,st=37819,ct=37820,lt=37821,ut=36492,dt=36494,ft=36495,pt=36283,mt=36284,ht=36285,gt=36286,_t=2300,vt=2301,yt=2302,bt=2303,xt=2400,St=2401,Ct=2402,wt=3200,Tt=`srgb`,Et=`srgb-linear`,Dt=`linear`,Ot=`srgb`,kt=7680,At=35044,jt=2e3;function Mt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Nt(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Pt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ft(){let e=Pt(`canvas`);return e.style.display=`block`,e}var It={};function Lt(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Rt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function R(...e){e=Rt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function z(...e){e=Rt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function zt(...e){let t=e.join(` `);t in It||(It[t]=!0,R(...e))}function Bt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Vt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},Ht=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Ut=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Wt=1234567,Gt=Math.PI/180,Kt=180/Math.PI;function qt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ut[e&255]+Ut[e>>8&255]+Ut[e>>16&255]+Ut[e>>24&255]+`-`+Ut[t&255]+Ut[t>>8&255]+`-`+Ut[t>>16&15|64]+Ut[t>>24&255]+`-`+Ut[n&63|128]+Ut[n>>8&255]+`-`+Ut[n>>16&255]+Ut[n>>24&255]+Ut[r&255]+Ut[r>>8&255]+Ut[r>>16&255]+Ut[r>>24&255]).toLowerCase()}function B(e,t,n){return Math.max(t,Math.min(n,e))}function Jt(e,t){return(e%t+t)%t}function Yt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function Xt(e,t,n){return e===t?0:(n-e)/(t-e)}function Zt(e,t,n){return(1-n)*e+n*t}function Qt(e,t,n,r){return Zt(e,t,1-Math.exp(-n*r))}function $t(e,t=1){return t-Math.abs(Jt(e,t*2)-t)}function en(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function tn(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function nn(e,t){return e+Math.floor(Math.random()*(t-e+1))}function rn(e,t){return e+Math.random()*(t-e)}function an(e){return e*(.5-Math.random())}function on(e){e!==void 0&&(Wt=e);let t=Wt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function sn(e){return e*Gt}function cn(e){return e*Kt}function ln(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function un(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function dn(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function fn(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:R(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function pn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function mn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var hn={DEG2RAD:Gt,RAD2DEG:Kt,generateUUID:qt,clamp:B,euclideanModulo:Jt,mapLinear:Yt,inverseLerp:Xt,lerp:Zt,damp:Qt,pingpong:$t,smoothstep:en,smootherstep:tn,randInt:nn,randFloat:rn,randFloatSpread:an,seededRandom:on,degToRad:sn,radToDeg:cn,isPowerOfTwo:ln,ceilPowerOfTwo:un,floorPowerOfTwo:dn,setQuaternionFromProperEuler:fn,normalize:mn,denormalize:pn},V=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(B(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},gn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:R(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(B(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vn.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vn.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this.z=B(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this.z=B(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _n.copy(this).projectOnVector(e),this.sub(_n)}reflect(e){return this.sub(_n.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(B(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_n=new H,vn=new gn,U=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return zt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(yn.makeScale(e,t)),this}rotate(e){return zt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(yn.makeRotation(-e)),this}translate(e,t){return zt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(yn.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},yn=new U,bn=new U().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xn=new U().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sn(){let e={enabled:!0,workingColorSpace:Et,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Cn(e.r),e.g=Cn(e.g),e.b=Cn(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=wn(e.r),e.g=wn(e.g),e.b=wn(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Dt:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return zt(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return zt(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Et]:{primaries:t,whitePoint:r,transfer:Dt,toXYZ:bn,fromXYZ:xn,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:t,whitePoint:r,transfer:Ot,toXYZ:bn,fromXYZ:xn,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),e}var W=Sn();function Cn(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function wn(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Tn,En=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Tn===void 0&&(Tn=Pt(`canvas`)),Tn.width=e.width,Tn.height=e.height;let t=Tn.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Tn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Pt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Cn(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Cn(t[e]/255)*255):t[e]=Cn(t[e]);return{data:t,width:e.width,height:e.height}}return R(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Dn=0,On=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Dn++}),this.uuid=qt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(kn(r[t].image)):e.push(kn(r[t]))}else e=kn(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function kn(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?En.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(R(`Texture: Unable to serialize Texture.`),{})}var An=0,jn=new H,Mn=class e extends Ht{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=le,i=le,a=pe,o=he,s=je,c=ge,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:An++}),this.uuid=qt(),this.name=``,this.source=new On(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new V(0,0),this.repeat=new V(1,1),this.center=new V(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new U,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(jn).x}get height(){return this.source.getSize(jn).y}get depth(){return this.source.getSize(jn).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){R(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ce:e.x-=Math.floor(e.x);break;case le:e.x=e.x<0?0:1;break;case ue:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case ce:e.y-=Math.floor(e.y);break;case le:e.y=e.y<0?0:1;break;case ue:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Mn.DEFAULT_IMAGE=null,Mn.DEFAULT_MAPPING=300,Mn.DEFAULT_ANISOTROPY=1;var Nn=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this.z=B(this.z,e.z,t.z),this.w=B(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this.z=B(this.z,e,t),this.w=B(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pn=class extends Ht{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Nn(0,0,e,t),this.scissorTest=!1,this.viewport=new Nn(0,0,e,t),this.textures=[];let r=new Mn({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:pe,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new On(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Fn=class extends Pn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},In=class extends Mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=N,this.minFilter=N,this.wrapR=le,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Ln=class extends Mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=N,this.minFilter=N,this.wrapR=le,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Rn=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/zn.setFromMatrixColumn(e,0).length(),i=1/zn.setFromMatrixColumn(e,1).length(),a=1/zn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vn,e,Hn)}lookAt(e,t,n){let r=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),Un.crossVectors(n,Gn),Un.lengthSq()===0&&(Math.abs(n.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),Un.crossVectors(n,Gn)),Un.normalize(),Wn.crossVectors(Gn,Un),r[0]=Un.x,r[4]=Wn.x,r[8]=Gn.x,r[1]=Un.y,r[5]=Wn.y,r[9]=Gn.y,r[2]=Un.z,r[6]=Wn.z,r[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],M=r[3],te=r[7],ne=r[11],re=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*te,i[8]=a*C+o*D+s*j+c*ne,i[12]=a*w+o*O+s*ee+c*re,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*te,i[9]=l*C+u*D+d*j+f*ne,i[13]=l*w+u*O+d*ee+f*re,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*te,i[10]=p*C+m*D+h*j+g*ne,i[14]=p*w+m*O+h*ee+g*re,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*te,i[11]=_*C+v*D+y*j+b*ne,i[15]=_*w+v*O+y*ee+b*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=zn.set(r[0],r[1],r[2]).length(),o=zn.set(r[4],r[5],r[6]).length(),s=zn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Bn.copy(this);let c=1/a,l=1/o,u=1/s;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=l,Bn.elements[5]*=l,Bn.elements[6]*=l,Bn.elements[8]*=u,Bn.elements[9]*=u,Bn.elements[10]*=u,t.setFromRotationMatrix(Bn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=jt,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=jt,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},zn=new H,Bn=new Rn,Vn=new H(0,0,0),Hn=new H(1,1,1),Un=new H,Wn=new H,Gn=new H,Kn=new Rn,qn=new gn,Jn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(B(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-B(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(B(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-B(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(B(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-B(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:R(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Kn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qn.setFromEuler(this),this.setFromQuaternion(qn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jn.DEFAULT_ORDER=`XYZ`;var Yn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Xn=0,Zn=new H,Qn=new gn,$n=new Rn,er=new H,tr=new H,nr=new H,rr=new gn,ir=new H(1,0,0),ar=new H(0,1,0),or=new H(0,0,1),sr={type:`added`},cr={type:`removed`},lr={type:`childadded`,child:null},ur={type:`childremoved`,child:null},dr=class e extends Ht{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xn++}),this.uuid=qt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new H,n=new Jn,r=new gn,i=new H(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Rn},normalMatrix:{value:new U}}),this.matrix=new Rn,this.matrixWorld=new Rn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qn.setFromAxisAngle(e,t),this.quaternion.multiply(Qn),this}rotateOnWorldAxis(e,t){return Qn.setFromAxisAngle(e,t),this.quaternion.premultiply(Qn),this}rotateX(e){return this.rotateOnAxis(ir,e)}rotateY(e){return this.rotateOnAxis(ar,e)}rotateZ(e){return this.rotateOnAxis(or,e)}translateOnAxis(e,t){return Zn.copy(e).applyQuaternion(this.quaternion),this.position.add(Zn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ir,e)}translateY(e){return this.translateOnAxis(ar,e)}translateZ(e){return this.translateOnAxis(or,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?er.copy(e):er.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(tr,er,this.up):$n.lookAt(er,tr,this.up),this.quaternion.setFromRotationMatrix($n),r&&($n.extractRotation(r.matrixWorld),Qn.setFromRotationMatrix($n),this.quaternion.premultiply(Qn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(z(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sr),lr.child=e,this.dispatchEvent(lr),lr.child=null):z(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cr),ur.child=e,this.dispatchEvent(ur),ur.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sr),lr.child=e,this.dispatchEvent(lr),lr.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,e,nr),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,rr,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};dr.DEFAULT_UP=new H(0,1,0),dr.DEFAULT_MATRIX_AUTO_UPDATE=!0,dr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fr=class extends dr{constructor(){super(),this.isGroup=!0,this.type=`Group`}},pr={type:`move`},mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pr)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new fr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},hr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},_r={h:0,s:0,l:0};function vr(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var G=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,W.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=W.workingColorSpace){return this.r=e,this.g=t,this.b=n,W.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=W.workingColorSpace){if(e=Jt(e,1),t=B(t,0,1),n=B(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=vr(i,r,e+1/3),this.g=vr(i,r,e),this.b=vr(i,r,e-1/3)}return W.colorSpaceToWorking(this,r),this}setStyle(e,t=Tt){function n(t){t!==void 0&&parseFloat(t)<1&&R(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:R(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);R(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let n=hr[e.toLowerCase()];return n===void 0?R(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cn(e.r),this.g=Cn(e.g),this.b=Cn(e.b),this}copyLinearToSRGB(e){return this.r=wn(e.r),this.g=wn(e.g),this.b=wn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return W.workingToColorSpace(yr.copy(this),e),Math.round(B(yr.r*255,0,255))*65536+Math.round(B(yr.g*255,0,255))*256+Math.round(B(yr.b*255,0,255))}getHexString(e=Tt){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=W.workingColorSpace){W.workingToColorSpace(yr.copy(this),t);let n=yr.r,r=yr.g,i=yr.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=W.workingColorSpace){return W.workingToColorSpace(yr.copy(this),t),e.r=yr.r,e.g=yr.g,e.b=yr.b,e}getStyle(e=Tt){W.workingToColorSpace(yr.copy(this),e);let t=yr.r,n=yr.g,r=yr.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+t,gr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gr),e.getHSL(_r);let n=Zt(gr.h,_r.h,t),r=Zt(gr.s,_r.s,t),i=Zt(gr.l,_r.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yr=new G;G.NAMES=hr;var br=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new G(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},xr=class extends dr{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Sr=new H,Cr=new H,wr=new H,Tr=new H,Er=new H,Dr=new H,Or=new H,kr=new H,Ar=new H,jr=new H,Mr=new Nn,Nr=new Nn,Pr=new Nn,Fr=class e{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Sr.subVectors(e,t),r.cross(Sr);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Sr.subVectors(r,t),Cr.subVectors(n,t),wr.subVectors(e,t);let a=Sr.dot(Sr),o=Sr.dot(Cr),s=Sr.dot(wr),c=Cr.dot(Cr),l=Cr.dot(wr),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Tr)!==null&&Tr.x>=0&&Tr.y>=0&&Tr.x+Tr.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Tr)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Tr.x),s.addScaledVector(a,Tr.y),s.addScaledVector(o,Tr.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Mr.setScalar(0),Nr.setScalar(0),Pr.setScalar(0),Mr.fromBufferAttribute(e,t),Nr.fromBufferAttribute(e,n),Pr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Mr,i.x),a.addScaledVector(Nr,i.y),a.addScaledVector(Pr,i.z),a}static isFrontFacing(e,t,n,r){return Sr.subVectors(n,t),Cr.subVectors(e,t),Sr.cross(Cr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sr.subVectors(this.c,this.b),Cr.subVectors(this.a,this.b),Sr.cross(Cr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Er.subVectors(r,n),Dr.subVectors(i,n),kr.subVectors(e,n);let s=Er.dot(kr),c=Dr.dot(kr);if(s<=0&&c<=0)return t.copy(n);Ar.subVectors(e,r);let l=Er.dot(Ar),u=Dr.dot(Ar);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Er,a);jr.subVectors(e,i);let f=Er.dot(jr),p=Dr.dot(jr);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Dr,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Or.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Or,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Er,a).addScaledVector(Dr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ir=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Rr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Rr):Rr.fromBufferAttribute(r,t),Rr.applyMatrix4(e.matrixWorld),this.expandByPoint(Rr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),zr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),zr.copy(e.boundingBox)),zr.applyMatrix4(e.matrixWorld),this.union(zr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rr),Rr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Kr),qr.subVectors(this.max,Kr),Br.subVectors(e.a,Kr),Vr.subVectors(e.b,Kr),Hr.subVectors(e.c,Kr),Ur.subVectors(Vr,Br),Wr.subVectors(Hr,Vr),Gr.subVectors(Br,Hr);let t=[0,-Ur.z,Ur.y,0,-Wr.z,Wr.y,0,-Gr.z,Gr.y,Ur.z,0,-Ur.x,Wr.z,0,-Wr.x,Gr.z,0,-Gr.x,-Ur.y,Ur.x,0,-Wr.y,Wr.x,0,-Gr.y,Gr.x,0];return!Xr(t,Br,Vr,Hr,qr)||(t=[1,0,0,0,1,0,0,0,1],!Xr(t,Br,Vr,Hr,qr))?!1:(Jr.crossVectors(Ur,Wr),t=[Jr.x,Jr.y,Jr.z],Xr(t,Br,Vr,Hr,qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Lr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Lr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Lr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Lr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Lr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Lr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Lr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Lr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Lr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Lr=[new H,new H,new H,new H,new H,new H,new H,new H],Rr=new H,zr=new Ir,Br=new H,Vr=new H,Hr=new H,Ur=new H,Wr=new H,Gr=new H,Kr=new H,qr=new H,Jr=new H,Yr=new H;function Xr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Yr.fromArray(e,a);let o=i.x*Math.abs(Yr.x)+i.y*Math.abs(Yr.y)+i.z*Math.abs(Yr.z),s=t.dot(Yr),c=n.dot(Yr),l=r.dot(Yr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Zr=new H,Qr=new V,$r=0,ei=class extends Ht{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$r++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=At,this.updateRanges=[],this.gpuType=Se,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qr.fromBufferAttribute(this,t),Qr.applyMatrix3(e),this.setXY(t,Qr.x,Qr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zr.fromBufferAttribute(this,t),Zr.applyMatrix3(e),this.setXYZ(t,Zr.x,Zr.y,Zr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zr.fromBufferAttribute(this,t),Zr.applyMatrix4(e),this.setXYZ(t,Zr.x,Zr.y,Zr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zr.fromBufferAttribute(this,t),Zr.applyNormalMatrix(e),this.setXYZ(t,Zr.x,Zr.y,Zr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zr.fromBufferAttribute(this,t),Zr.transformDirection(e),this.setXYZ(t,Zr.x,Zr.y,Zr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array),r=mn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array),r=mn(r,this.array),i=mn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},ti=class extends ei{constructor(e,t,n){super(new Uint16Array(e),t,n)}},ni=class extends ei{constructor(e,t,n){super(new Uint32Array(e),t,n)}},ri=class extends ei{constructor(e,t,n){super(new Float32Array(e),t,n)}},ii=new Ir,ai=new H,oi=new H,si=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?ii.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ai.subVectors(e,this.center);let t=ai.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(ai,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oi.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ai.copy(e.center).add(oi)),this.expandByPoint(ai.copy(e.center).sub(oi))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ci=0,li=new Rn,ui=new dr,di=new H,fi=new Ir,pi=new Ir,mi=new H,hi=class e extends Ht{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ci++}),this.uuid=qt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Mt(e)?ni:ti)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new U().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,n){return li.makeTranslation(e,t,n),this.applyMatrix4(li),this}scale(e,t,n){return li.makeScale(e,t,n),this.applyMatrix4(li),this}lookAt(e){return ui.lookAt(e),ui.updateMatrix(),this.applyMatrix4(ui.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(di).negate(),this.translate(di.x,di.y,di.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new ri(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&R(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ir);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];fi.setFromBufferAttribute(n),this.morphTargetsRelative?(mi.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(mi),mi.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(mi)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&z(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new H,1/0);else if(e){let n=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];pi.setFromBufferAttribute(n),this.morphTargetsRelative?(mi.addVectors(fi.min,pi.min),fi.expandByPoint(mi),mi.addVectors(fi.max,pi.max),fi.expandByPoint(mi)):(fi.expandByPoint(pi.min),fi.expandByPoint(pi.max))}fi.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)mi.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(mi));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)mi.fromBufferAttribute(a,t),o&&(di.fromBufferAttribute(e,t),mi.add(di)),r=Math.max(r,n.distanceToSquared(mi))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&z(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){z(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new ei(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new H,s[e]=new H;let c=new H,l=new H,u=new H,d=new V,f=new V,p=new V,m=new H,h=new H;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new H,y=new H,b=new H,x=new H;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new ei(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new H,i=new H,a=new H,o=new H,s=new H,c=new H,l=new H,u=new H;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mi.fromBufferAttribute(e,t),mi.normalize(),e.setXYZ(t,mi.x,mi.y,mi.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new ei(a,r,i)}if(this.index===null)return R(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},gi=new H,_i=new H,vi=new U,yi=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=gi.subVectors(n,t).cross(_i.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(gi),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||vi.getNormalMatrix(e),r=this.coplanarPoint(gi).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},bi=0,xi=class extends Ht{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bi++}),this.uuid=qt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new G(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kt,this.stencilZFail=kt,this.stencilZPass=kt,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){R(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new G().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new yi().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new V().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new V().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Si=new H,Ci=new H,wi=new H,Ti=new H,Ei=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ci.copy(e).add(t).multiplyScalar(.5),wi.copy(t).sub(e).normalize(),Ti.copy(this.origin).sub(Ci);let i=e.distanceTo(t)*.5,a=-this.direction.dot(wi),o=Ti.dot(this.direction),s=-Ti.dot(wi),c=Ti.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ci).addScaledVector(wi,d),f}intersectSphere(e,t){if(e.radius<0)return null;Si.subVectors(e.center,this.origin);let n=Si.dot(this.direction),r=Si.dot(Si)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,ee,M;if(y>=b&&y>=x?(w=s,D=u,A=p,M=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,ee=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,ee=_)):b>=x?(w=c,D=d,A=m,M=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,ee=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,ee=v)):(w=l,D=f,A=h,M=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,ee=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,ee=g)),w===0)return null;let te=S/w,ne=C/w,re=1/w,ie=T-te*D,ae=E-ne*D,oe=O-te*A,se=k-ne*A,ce=j-te*M,le=ee-ne*M,ue=ce*se-le*oe,N=ie*le-ae*ce,de=oe*ae-se*ie;if(r){if(ue<0||N<0||de<0)return null}else if((ue<0||N<0||de<0)&&(ue>0||N>0||de>0))return null;let fe=ue+N+de;if(fe===0)return null;let pe=re*(ue*D+N*A+de*M);return(fe>0?pe<0:pe>0)?null:this.at(pe/fe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Di=class extends xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new G(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Oi=new Rn,ki=new Ei,Ai=new si,ji=new H,Mi=new H,Ni=new H,Pi=new H,Fi=new H,Ii=new H,Li=new H,Ri=new H,zi=class extends dr{constructor(e=new hi,t=new Di){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Ii.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Fi.fromBufferAttribute(s,e),a?Ii.addScaledVector(Fi,r):Ii.addScaledVector(Fi.sub(t),r))}t.add(Ii)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ai.copy(n.boundingSphere),Ai.applyMatrix4(i),ki.copy(e.ray).recast(e.near),!(Ai.containsPoint(ki.origin)===!1&&(ki.intersectSphere(Ai,ji)===null||ki.origin.distanceToSquared(ji)>(e.far-e.near)**2))&&(Oi.copy(i).invert(),ki.copy(e.ray).applyMatrix4(Oi),(n.boundingBox===null||ki.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,ki)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Vi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Vi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Vi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Vi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Bi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Ri.copy(s),Ri.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Ri);return l<n.near||l>n.far?null:{distance:l,point:Ri.clone(),object:e}}function Vi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Mi),e.getVertexPosition(c,Ni),e.getVertexPosition(l,Pi);let u=Bi(e,t,n,r,Mi,Ni,Pi,Li);if(u){let e=new H;Fr.getBarycoord(Li,Mi,Ni,Pi,e),i&&(u.uv=Fr.getInterpolatedAttribute(i,s,c,l,e,new V)),a&&(u.uv1=Fr.getInterpolatedAttribute(a,s,c,l,e,new V)),o&&(u.normal=Fr.getInterpolatedAttribute(o,s,c,l,e,new H),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new H,materialIndex:0};Fr.getNormal(Mi,Ni,Pi,t.normal),u.face=t,u.barycoord=e}return u}var Hi=class extends Mn{constructor(e=null,t=1,n=1,r,i,a,o,s,c=N,l=N,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ui=class extends ei{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Wi=new Rn,Gi=new Rn,Ki=[],qi=new Ir,Ji=new Rn,Yi=new zi,Xi=new si,Zi=class extends zi{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ui(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Ji)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ir),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wi),qi.copy(e.boundingBox).applyMatrix4(Wi),this.boundingBox.union(qi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new si),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wi),Xi.copy(e.boundingSphere).applyMatrix4(Wi),this.boundingSphere.union(Xi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Yi.geometry=this.geometry,Yi.material=this.material,Yi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xi.copy(this.boundingSphere),Xi.applyMatrix4(n),e.ray.intersectsSphere(Xi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Wi),Gi.multiplyMatrices(n,Wi),Yi.matrixWorld=Gi,Yi.raycast(e,Ki);for(let e=0,n=Ki.length;e<n;e++){let n=Ki[e];n.instanceId=i,n.object=this,t.push(n)}Ki.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ui(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Hi(new Float32Array(r*this.count),r,this.count,Ne,Se));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Qi=new si,$i=new V(.5,.5),ea=new H,ta=class{constructor(e=new yi,t=new yi,n=new yi,r=new yi,i=new yi,a=new yi){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jt,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476+$i.distanceTo(e.center),Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ea.x=r.normal.x>0?e.max.x:e.min.x,ea.y=r.normal.y>0?e.max.y:e.min.y,ea.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ea)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},na=class extends xi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new G(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ra=new H,ia=new H,aa=new Rn,oa=new Ei,sa=new si,ca=new H,la=new H,ua=class extends dr{constructor(e=new hi,t=new na){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)ra.fromBufferAttribute(t,e-1),ia.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=ra.distanceTo(ia);e.setAttribute(`lineDistance`,new ri(n,1))}else R(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(r),sa.radius+=i,e.ray.intersectsSphere(sa)===!1)return;aa.copy(r).invert(),oa.copy(e.ray).applyMatrix4(aa);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=da(this,e,oa,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=da(this,e,oa,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=da(this,e,oa,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=da(this,e,oa,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function da(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(ra.fromBufferAttribute(s,i),ia.fromBufferAttribute(s,a),n.distanceSqToSegment(ra,ia,ca,la)>r)return;ca.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(ca);if(!(c<t.near||c>t.far))return{distance:c,point:la.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var fa=new H,pa=new H,ma=class extends ua{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)fa.fromBufferAttribute(t,e),pa.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+fa.distanceTo(pa);e.setAttribute(`lineDistance`,new ri(n,1))}else R(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},ha=class extends Mn{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ga=class extends Mn{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},_a=class extends Mn{constructor(e,t,n=xe,r,i,a,o=N,s=N,c,l=P,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new On(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},va=class extends _a{constructor(e,t=xe,n=301,r,i,a=N,o=N,s,c=P){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ya=class extends Mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ba=class e extends hi{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new ri(c,3)),this.setAttribute(`normal`,new ri(l,3)),this.setAttribute(`uv`,new ri(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new H;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},xa=class e extends hi{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new H,g=new H;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new ri(o,3)),this.setAttribute(`normal`,new ri(s,3)),this.setAttribute(`uv`,new ri(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Sa=class e extends hi{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new ri(u,3)),this.setAttribute(`normal`,new ri(d,3)),this.setAttribute(`uv`,new ri(f,2));function _(){let a=new H,_=new H,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new V,m=new H,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ca=class e extends hi{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new ri(i,3)),this.setAttribute(`normal`,new ri(i.slice(),3)),this.setAttribute(`uv`,new ri(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new H,r=new H,i=new H;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new H;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new H;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new H,t=new H,n=new H,r=new H,o=new V,s=new V,c=new V;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},wa=new H,Ta=new H,Ea=new H,Da=new Fr,Oa=class extends hi{constructor(e=null,t=1){if(super(),this.type=`EdgesGeometry`,this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=1e4,r=Math.cos(Gt*t),i=e.getIndex(),a=e.getAttribute(`position`),o=i?i.count:a.count,s=[0,0,0],c=[`a`,`b`,`c`],l=[,,,],u={},d=[];for(let e=0;e<o;e+=3){i?(s[0]=i.getX(e),s[1]=i.getX(e+1),s[2]=i.getX(e+2)):(s[0]=e,s[1]=e+1,s[2]=e+2);let{a:t,b:o,c:f}=Da;if(t.fromBufferAttribute(a,s[0]),o.fromBufferAttribute(a,s[1]),f.fromBufferAttribute(a,s[2]),Da.getNormal(Ea),l[0]=`${Math.round(t.x*n)},${Math.round(t.y*n)},${Math.round(t.z*n)}`,l[1]=`${Math.round(o.x*n)},${Math.round(o.y*n)},${Math.round(o.z*n)}`,l[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,l[0]!==l[1]&&l[1]!==l[2]&&l[2]!==l[0])for(let e=0;e<3;e++){let t=(e+1)%3,n=l[e],i=l[t],a=Da[c[e]],o=Da[c[t]],f=`${n}_${i}`,p=`${i}_${n}`;p in u&&u[p]?(Ea.dot(u[p].normal)<=r&&(d.push(a.x,a.y,a.z),d.push(o.x,o.y,o.z)),u[p]=null):f in u||(u[f]={index0:s[e],index1:s[t],normal:Ea.clone()})}}for(let e in u)if(u[e]){let{index0:t,index1:n}=u[e];wa.fromBufferAttribute(a,t),Ta.fromBufferAttribute(a,n),d.push(wa.x,wa.y,wa.z),d.push(Ta.x,Ta.y,Ta.z)}this.setAttribute(`position`,new ri(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ka=class e extends Ca{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Aa=class e extends hi{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new ri(p,3)),this.setAttribute(`normal`,new ri(m,3)),this.setAttribute(`uv`,new ri(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},ja=class e extends hi{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new H,d=new H,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new ri(p,3)),this.setAttribute(`normal`,new ri(m,3)),this.setAttribute(`uv`,new ri(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Ma(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Pa(i))i.isRenderTargetTexture?(R(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Pa(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Na(e){let t={};for(let n=0;n<e.length;n++){let r=Ma(e[n]);for(let e in r)t[e]=r[e]}return t}function Pa(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Fa(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ia(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:W.workingColorSpace}var La={clone:Ma,merge:Na},Ra=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,za=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ba=class extends xi{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ra,this.fragmentShader=za,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ma(e.uniforms),this.uniformsGroups=Fa(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new G().setHex(r.value);break;case`v2`:this.uniforms[n].value=new V().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Nn().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new U().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Rn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Va=class extends Ba{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Ha=class extends xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new G(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new G(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ua=class extends xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=wt,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Wa=class extends xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ga(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Ka(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var qa=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Ja=class extends qa{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xt,endingEnd:xt}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case St:i=e,o=2*t-n;break;case Ct:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case St:a=e,s=2*n-t;break;case Ct:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Ya=class extends qa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Xa=class extends qa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Za=class extends qa{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=eo(n,t,g,y,r);i[p]=Qa(x,o,_,b,m)}return i}};function Qa(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function $a(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function eo(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Qa(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=$a(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var to=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ga(t,this.TimeBufferType),this.values=Ga(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ga(e.times,Array),values:Ga(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Ka(e.settings)&&(n.settings={inTangents:Ga(e.settings.inTangents,Array),outTangents:Ga(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ya(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Za(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case _t:t=this.InterpolantFactoryMethodDiscrete;break;case vt:t=this.InterpolantFactoryMethodLinear;break;case yt:t=this.InterpolantFactoryMethodSmooth;break;case bt:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return R(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _t;case this.InterpolantFactoryMethodLinear:return vt;case this.InterpolantFactoryMethodSmooth:return yt;case this.InterpolantFactoryMethodBezier:return bt}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Ka(this.settings)&&(no(this.settings.inTangents,e),no(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(z(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(z(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){z(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){z(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Nt(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){z(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===yt,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ka(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function no(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}to.prototype.ValueTypeName=``,to.prototype.TimeBufferType=Float32Array,to.prototype.ValueBufferType=Float32Array,to.prototype.DefaultInterpolation=vt;var ro=class extends to{constructor(e,t,n){super(e,t,n)}};ro.prototype.ValueTypeName=`bool`,ro.prototype.ValueBufferType=Array,ro.prototype.DefaultInterpolation=_t,ro.prototype.InterpolantFactoryMethodLinear=void 0,ro.prototype.InterpolantFactoryMethodSmooth=void 0;var io=class extends to{constructor(e,t,n,r){super(e,t,n,r)}};io.prototype.ValueTypeName=`color`;var ao=class extends to{constructor(e,t,n,r){super(e,t,n,r)}};ao.prototype.ValueTypeName=`number`;var oo=class extends qa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)gn.slerpFlat(i,0,a,c-o,a,c,s);return i}},so=class extends to{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new oo(this.times,this.values,this.getValueSize(),e)}};so.prototype.ValueTypeName=`quaternion`,so.prototype.InterpolantFactoryMethodSmooth=void 0;var co=class extends to{constructor(e,t,n){super(e,t,n)}};co.prototype.ValueTypeName=`string`,co.prototype.ValueBufferType=Array,co.prototype.DefaultInterpolation=_t,co.prototype.InterpolantFactoryMethodLinear=void 0,co.prototype.InterpolantFactoryMethodSmooth=void 0;var lo=class extends to{constructor(e,t,n,r){super(e,t,n,r)}};lo.prototype.ValueTypeName=`vector`;var uo=class extends dr{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new G(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},fo=class extends uo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(dr.DEFAULT_UP),this.updateMatrix(),this.groundColor=new G(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},po=new Rn,mo=new H,ho=new H,go=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new V(512,512),this.mapType=ge,this.map=null,this.mapPass=null,this.matrix=new Rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ta,this._frameExtents=new V(1,1),this._viewportCount=1,this._viewports=[new Nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;mo.setFromMatrixPosition(e.matrixWorld),t.position.copy(mo),ho.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ho),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){po.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(po,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(po)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},_o=new H,vo=new gn,yo=new H,bo=class extends dr{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Rn,this.projectionMatrix=new Rn,this.projectionMatrixInverse=new Rn,this.coordinateSystem=jt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_o,vo,yo),yo.x===1&&yo.y===1&&yo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_o,vo,yo.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(_o,vo,yo),yo.x===1&&yo.y===1&&yo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_o,vo,yo.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},xo=new H,So=new V,Co=new V,wo=class extends bo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Kt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Gt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kt*2*Math.atan(Math.tan(Gt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xo.x,xo.y).multiplyScalar(-e/xo.z),xo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xo.x,xo.y).multiplyScalar(-e/xo.z)}getViewSize(e,t){return this.getViewBounds(e,So,Co),t.subVectors(Co,So)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Gt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},To=class extends bo{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Eo=class extends go{constructor(){super(new To(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Do=class extends uo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(dr.DEFAULT_UP),this.updateMatrix(),this.target=new dr,this.shadow=new Eo}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Oo=-90,ko=1,Ao=class extends dr{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new wo(Oo,ko,e,t);r.layers=this.layers,this.add(r);let i=new wo(Oo,ko,e,t);i.layers=this.layers,this.add(i);let a=new wo(Oo,ko,e,t);a.layers=this.layers,this.add(a);let o=new wo(Oo,ko,e,t);o.layers=this.layers,this.add(o);let s=new wo(Oo,ko,e,t);s.layers=this.layers,this.add(s);let c=new wo(Oo,ko,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},jo=class extends wo{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Mo=`\\[\\]\\.:\\/`,No=RegExp(`[\\[\\]\\.:\\/]`,`g`),Po=`[^\\[\\]\\.:\\/]`,Fo=`[^`+Mo.replace(`\\.`,``)+`]`,Io=`((?:WC+[\\/:])*)`.replace(`WC`,Po),Lo=`(WCOD+)?`.replace(`WCOD`,Fo),Ro=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Po),zo=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Po),Bo=RegExp(`^`+Io+Lo+Ro+zo+`$`),Vo=[`material`,`materials`,`bones`,`map`],Ho=class{constructor(e,t,n){let r=n||Uo.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Uo=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(No,``)}static parseTrackName(e){let t=Bo.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Vo.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){R(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){z(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){z(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){z(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){z(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){z(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;z(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Uo.Composite=Ho,Uo.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Uo.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Uo.prototype.GetterByBindingType=[Uo.prototype._getValue_direct,Uo.prototype._getValue_array,Uo.prototype._getValue_arrayElement,Uo.prototype._getValue_toArray],Uo.prototype.SetterByBindingTypeAndVersioning=[[Uo.prototype._setValue_direct,Uo.prototype._setValue_direct_setNeedsUpdate,Uo.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Uo.prototype._setValue_array,Uo.prototype._setValue_array_setNeedsUpdate,Uo.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Uo.prototype._setValue_arrayElement,Uo.prototype._setValue_arrayElement_setNeedsUpdate,Uo.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Uo.prototype._setValue_fromArray,Uo.prototype._setValue_fromArray_setNeedsUpdate,Uo.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Wo=new Rn,Go=class{constructor(e,t,n=0,r=1/0){this.ray=new Ei(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Yn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):z(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Wo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wo),this}intersectObject(e,t=!0,n=[]){return qo(e,this,n,t),n.sort(Ko),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)qo(e[r],this,n,t);return n.sort(Ko),n}};function Ko(e,t){return e.distance-t.distance}function qo(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)qo(r[e],t,n,!0)}}var Jo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,R(`Clock: This module has been deprecated. Please use THREE.Timer instead.`)}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},Yo=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=B(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(B(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var Xo=class extends Ht{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Zo(e,t,n,r){let i=Qo(r);switch(n){case ke:return e*t;case Ne:return e*t/i.components*i.byteLength;case Pe:return e*t/i.components*i.byteLength;case Fe:return e*t*2/i.components*i.byteLength;case Ie:return e*t*2/i.components*i.byteLength;case Ae:return e*t*3/i.components*i.byteLength;case je:return e*t*4/i.components*i.byteLength;case Le:return e*t*4/i.components*i.byteLength;case F:case Re:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case I:case L:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Be:case He:return Math.max(e,16)*Math.max(t,8)/4;case ze:case Ve:return Math.max(e,8)*Math.max(t,8)/2;case Ue:case We:case Ke:case qe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ge:case Je:case Ye:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Xe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ze:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Qe:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case $e:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case et:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case tt:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case nt:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case rt:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case it:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case at:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case ot:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case st:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case ct:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case lt:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ut:case dt:case ft:return Math.ceil(e/4)*Math.ceil(t/4)*16;case pt:case mt:return Math.ceil(e/4)*Math.ceil(t/4)*8;case ht:case gt:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Qo(e){switch(e){case ge:case _e:return{byteLength:1,components:1};case ye:case ve:case Ce:return{byteLength:2,components:1};case we:case Te:return{byteLength:2,components:4};case xe:case be:case Se:return{byteLength:4,components:1};case De:case Oe:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?R(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function $o(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function es(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var K={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},q={common:{diffuse:{value:new G(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new U}},envmap:{envMap:{value:null},envMapRotation:{value:new U},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new U}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new U}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new U},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new U},normalScale:{value:new V(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new U},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new U}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new U}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new U}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new G(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new G(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0},uvTransform:{value:new U}},sprite:{diffuse:{value:new G(16777215)},opacity:{value:1},center:{value:new V(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}}},ts={basic:{uniforms:Na([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.fog]),vertexShader:K.meshbasic_vert,fragmentShader:K.meshbasic_frag},lambert:{uniforms:Na([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new G(0)},envMapIntensity:{value:1}}]),vertexShader:K.meshlambert_vert,fragmentShader:K.meshlambert_frag},phong:{uniforms:Na([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new G(0)},specular:{value:new G(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:K.meshphong_vert,fragmentShader:K.meshphong_frag},standard:{uniforms:Na([q.common,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.roughnessmap,q.metalnessmap,q.fog,q.lights,{emissive:{value:new G(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag},toon:{uniforms:Na([q.common,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.gradientmap,q.fog,q.lights,{emissive:{value:new G(0)}}]),vertexShader:K.meshtoon_vert,fragmentShader:K.meshtoon_frag},matcap:{uniforms:Na([q.common,q.bumpmap,q.normalmap,q.displacementmap,q.fog,{matcap:{value:null}}]),vertexShader:K.meshmatcap_vert,fragmentShader:K.meshmatcap_frag},points:{uniforms:Na([q.points,q.fog]),vertexShader:K.points_vert,fragmentShader:K.points_frag},dashed:{uniforms:Na([q.common,q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:K.linedashed_vert,fragmentShader:K.linedashed_frag},depth:{uniforms:Na([q.common,q.displacementmap]),vertexShader:K.depth_vert,fragmentShader:K.depth_frag},normal:{uniforms:Na([q.common,q.bumpmap,q.normalmap,q.displacementmap,{opacity:{value:1}}]),vertexShader:K.meshnormal_vert,fragmentShader:K.meshnormal_frag},sprite:{uniforms:Na([q.sprite,q.fog]),vertexShader:K.sprite_vert,fragmentShader:K.sprite_frag},background:{uniforms:{uvTransform:{value:new U},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:K.background_vert,fragmentShader:K.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new U}},vertexShader:K.backgroundCube_vert,fragmentShader:K.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:K.cube_vert,fragmentShader:K.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:K.equirect_vert,fragmentShader:K.equirect_frag},distance:{uniforms:Na([q.common,q.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:K.distance_vert,fragmentShader:K.distance_frag},shadow:{uniforms:Na([q.lights,q.fog,{color:{value:new G(0)},opacity:{value:1}}]),vertexShader:K.shadow_vert,fragmentShader:K.shadow_frag}};ts.physical={uniforms:Na([ts.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new U},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new U},clearcoatNormalScale:{value:new V(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new U},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new U},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new U},sheen:{value:0},sheenColor:{value:new G(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new U},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new U},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new U},transmissionSamplerSize:{value:new V},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new U},attenuationDistance:{value:0},attenuationColor:{value:new G(0)},specularColor:{value:new G(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new U},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new U},anisotropyVector:{value:new V},anisotropyMap:{value:null},anisotropyMapTransform:{value:new U}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag};var ns={r:0,b:0,g:0},rs=new Rn,is=new U;is.set(-1,0,0,0,1,0,0,0,1);function as(e,t,n,r,i,a){let o=new G(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new zi(new ba(1,1,1),new Ba({name:`BackgroundCubeMaterial`,uniforms:Ma(ts.backgroundCube.uniforms),vertexShader:ts.backgroundCube.vertexShader,fragmentShader:ts.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(rs.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(is),l.material.toneMapped=W.getTransfer(i.colorSpace)!==Ot,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new zi(new Aa(2,2),new Ba({name:`BackgroundMaterial`,uniforms:Ma(ts.background.uniforms),vertexShader:ts.background.vertexShader,fragmentShader:ts.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=W.getTransfer(i.colorSpace)!==Ot,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(ns,Ia(e)),n.buffers.color.setClear(ns.r,ns.g,ns.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function os(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function ss(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function cs(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(R(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&R(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function ls(e){let t=this,n=null,r=0,i=!1,a=!1,o=new yi,s=new U,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var us=4,ds=6,fs=20,ps=256,ms=new To,hs=new G,gs=null,_s=0,vs=0,ys=!1,bs=new H,xs=new H,Ss=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=bs}=i;gs=this._renderer.getRenderTarget(),_s=this._renderer.getActiveCubeFace(),vs=this._renderer.getActiveMipmapLevel(),ys=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ks(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Os(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(gs,_s,vs),this._renderer.xr.enabled=ys,e.scissorTest=!1,Ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gs=this._renderer.getRenderTarget(),_s=this._renderer.getActiveCubeFace(),vs=this._renderer.getActiveMipmapLevel(),ys=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pe,minFilter:pe,generateMipmaps:!1,type:Ce,format:je,colorSpace:Et,depthBuffer:!1},r=ws(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ws(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Cs(r)),this._blurMaterial=Ds(r,e,t),this._ggxMaterial=Es(r,e,t)}return r}_compileMaterial(e){let t=new zi(new hi,e);this._renderer.compile(t,ms)}_sceneToCubeUV(e,t,n,r,i){let a=new wo(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(hs),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new zi(new ba,new Di({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(hs),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Ts(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ks()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Os());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Ts(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,ms)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-us?n-d+us:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Ts(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,ms),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Ts(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,ms)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Ts(t,3*l*(r>this._lodMax-us?r-this._lodMax+us:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,ms)}};function Cs(e){let t=[],n=[],r=e,i=e-us+1+ds;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?xs.set(1,r,n):e===1?xs.set(-n,1,-r):e===2?xs.set(-n,r,1):e===3?xs.set(-1,r,-n):e===4?xs.set(-n,-1,r):xs.set(n,r,-1),xs.toArray(l,(e*6+t)*3)}}let u=new hi;u.setAttribute(`position`,new ei(c,3)),u.setAttribute(`outputDirection`,new ei(l,3)),n.push(new zi(u,null)),r>us&&r--}return{lodMeshes:n,sizeLods:t}}function ws(e,t,n){let r=new Fn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Ts(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Es(e,t,n){return new Ba({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:ps,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:As(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ds(e,t,n){return new Ba({name:`SphericalGaussianBlur`,defines:{SAMPLES:fs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:As(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Os(){return new Ba({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:As(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ks(){return new Ba({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:As(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function As(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var js=class extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ha(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ba(5,5,5),i=new Ba({name:`CubemapFromEquirect`,uniforms:Ma(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new zi(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=pe),new Ao(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Ms(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new js(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Ss(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Ss(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Ns(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&zt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Ps(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?ni:ti)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Fs(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Is(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:z(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Ls(e,t,n){let r=new WeakMap,i=new Nn;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new In(h,p,m,u);g.type=Se,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new V(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Rs(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var zs={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Bs(e,t,n,r,i,a){let o=new Fn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new hi;l.setAttribute(`position`,new ri([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new ri([0,2,0,0,2,0],2));let u=new Va({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new zi(l,u),f=new To(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new Fn(t,n,{type:Ce,depthBuffer:!1,stencilBuffer:!1}),c=new Fn(t,n,{type:Ce,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},W.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=zs[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Vs=new Mn,Hs=new _a(1,1),Us=new In,Ws=new Ln,Gs=new ha,Ks=[],qs=[],Js=new Float32Array(16),Ys=new Float32Array(9),Xs=new Float32Array(4);function Zs(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Ks[i];if(a===void 0&&(a=new Float32Array(i),Ks[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Qs(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function $s(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function ec(e,t){let n=qs[t];n===void 0&&(n=new Int32Array(t),qs[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function tc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function nc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qs(n,t))return;e.uniform2fv(this.addr,t),$s(n,t)}}function rc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Qs(n,t))return;e.uniform3fv(this.addr,t),$s(n,t)}}function ic(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qs(n,t))return;e.uniform4fv(this.addr,t),$s(n,t)}}function ac(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Qs(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),$s(n,t)}else{if(Qs(n,r))return;Xs.set(r),e.uniformMatrix2fv(this.addr,!1,Xs),$s(n,r)}}function oc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Qs(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),$s(n,t)}else{if(Qs(n,r))return;Ys.set(r),e.uniformMatrix3fv(this.addr,!1,Ys),$s(n,r)}}function sc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Qs(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),$s(n,t)}else{if(Qs(n,r))return;Js.set(r),e.uniformMatrix4fv(this.addr,!1,Js),$s(n,r)}}function cc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function lc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qs(n,t))return;e.uniform2iv(this.addr,t),$s(n,t)}}function uc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Qs(n,t))return;e.uniform3iv(this.addr,t),$s(n,t)}}function dc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qs(n,t))return;e.uniform4iv(this.addr,t),$s(n,t)}}function fc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function pc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qs(n,t))return;e.uniform2uiv(this.addr,t),$s(n,t)}}function mc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Qs(n,t))return;e.uniform3uiv(this.addr,t),$s(n,t)}}function hc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qs(n,t))return;e.uniform4uiv(this.addr,t),$s(n,t)}}function gc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Hs.compareFunction=n.isReversedDepthBuffer()?518:515,a=Hs):a=Vs,n.setTexture2D(t||a,i)}function _c(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Ws,i)}function vc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Gs,i)}function yc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Us,i)}function bc(e){switch(e){case 5126:return tc;case 35664:return nc;case 35665:return rc;case 35666:return ic;case 35674:return ac;case 35675:return oc;case 35676:return sc;case 5124:case 35670:return cc;case 35667:case 35671:return lc;case 35668:case 35672:return uc;case 35669:case 35673:return dc;case 5125:return fc;case 36294:return pc;case 36295:return mc;case 36296:return hc;case 35678:case 36198:case 36298:case 36306:case 35682:return gc;case 35679:case 36299:case 36307:return _c;case 35680:case 36300:case 36308:case 36293:return vc;case 36289:case 36303:case 36311:case 36292:return yc}}function xc(e,t){e.uniform1fv(this.addr,t)}function Sc(e,t){let n=Zs(t,this.size,2);e.uniform2fv(this.addr,n)}function Cc(e,t){let n=Zs(t,this.size,3);e.uniform3fv(this.addr,n)}function wc(e,t){let n=Zs(t,this.size,4);e.uniform4fv(this.addr,n)}function Tc(e,t){let n=Zs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ec(e,t){let n=Zs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Dc(e,t){let n=Zs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Oc(e,t){e.uniform1iv(this.addr,t)}function kc(e,t){e.uniform2iv(this.addr,t)}function Ac(e,t){e.uniform3iv(this.addr,t)}function jc(e,t){e.uniform4iv(this.addr,t)}function Mc(e,t){e.uniform1uiv(this.addr,t)}function Nc(e,t){e.uniform2uiv(this.addr,t)}function Pc(e,t){e.uniform3uiv(this.addr,t)}function Fc(e,t){e.uniform4uiv(this.addr,t)}function Ic(e,t,n){let r=this.cache,i=t.length,a=ec(n,i);Qs(r,a)||(e.uniform1iv(this.addr,a),$s(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Hs:Vs;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Lc(e,t,n){let r=this.cache,i=t.length,a=ec(n,i);Qs(r,a)||(e.uniform1iv(this.addr,a),$s(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Ws,a[e])}function Rc(e,t,n){let r=this.cache,i=t.length,a=ec(n,i);Qs(r,a)||(e.uniform1iv(this.addr,a),$s(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Gs,a[e])}function zc(e,t,n){let r=this.cache,i=t.length,a=ec(n,i);Qs(r,a)||(e.uniform1iv(this.addr,a),$s(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Us,a[e])}function Bc(e){switch(e){case 5126:return xc;case 35664:return Sc;case 35665:return Cc;case 35666:return wc;case 35674:return Tc;case 35675:return Ec;case 35676:return Dc;case 5124:case 35670:return Oc;case 35667:case 35671:return kc;case 35668:case 35672:return Ac;case 35669:case 35673:return jc;case 5125:return Mc;case 36294:return Nc;case 36295:return Pc;case 36296:return Fc;case 35678:case 36198:case 36298:case 36306:case 35682:return Ic;case 35679:case 36299:case 36307:return Lc;case 35680:case 36300:case 36308:case 36293:return Rc;case 36289:case 36303:case 36311:case 36292:return zc}}var Vc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=bc(t.type)}},Hc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bc(t.type)}},Uc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Wc=/(\w+)(\])?(\[|\.)?/g;function Gc(e,t){e.seq.push(t),e.map[t.id]=t}function Kc(e,t,n){let r=e.name,i=r.length;for(Wc.lastIndex=0;;){let a=Wc.exec(r),o=Wc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Gc(n,l===void 0?new Vc(s,e,t):new Hc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Uc(s),Gc(n,e)),n=e}}}var qc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Kc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Jc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Yc=37297,Xc=0;function Zc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Qc=new U;function $c(e){W._getMatrix(Qc,W.workingColorSpace,e);let t=`mat3( ${Qc.elements.map(e=>e.toFixed(4))} )`;switch(W.getTransfer(e)){case Dt:return[t,`LinearTransferOETF`];case Ot:return[t,`sRGBTransferOETF`];default:return R(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function el(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Zc(e.getShaderSource(t),r)}return i}function tl(e,t){let n=$c(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var nl={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function rl(e,t){let n=nl[t];return n===void 0?(R(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var il=new H;function al(){return W.getLuminanceCoefficients(il),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${il.x.toFixed(4)}, ${il.y.toFixed(4)}, ${il.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function ol(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(ll).join(`
`)}function sl(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function cl(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function ll(e){return e!==``}function ul(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var fl=/^[ \t]*#include +<([\w\d./]+)>/gm;function pl(e){return e.replace(fl,hl)}var ml=new Map;function hl(e,t){let n=K[t];if(n===void 0){let e=ml.get(t);if(e!==void 0)n=K[e],R(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return pl(n)}var gl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _l(e){return e.replace(gl,vl)}function vl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function yl(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var bl={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function xl(e){return bl[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Sl={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Cl(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Sl[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var wl={302:`ENVMAP_MODE_REFRACTION`};function Tl(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:wl[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var El={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Dl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:El[e.combine]||`ENVMAP_BLENDING_NONE`}function Ol(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function kl(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=xl(n),l=Cl(n),u=Tl(n),d=Dl(n),f=Ol(n),p=ol(n),m=sl(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ll).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ll).join(`
`),_.length>0&&(_+=`
`)):(g=[yl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(ll).join(`
`),_=[yl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:K.tonemapping_pars_fragment,n.toneMapping===0?``:rl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,K.colorspace_pars_fragment,tl(`linearToOutputTexel`,n.outputColorSpace),al(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(ll).join(`
`)),o=pl(o),o=ul(o,n),o=dl(o,n),s=pl(s),s=ul(s,n),s=dl(s,n),o=_l(o),s=_l(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Jc(i,i.VERTEX_SHADER,y),S=Jc(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=el(i,x,`vertex`),n=el(i,S,`fragment`);z(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):R(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new qc(i,h),T=cl(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Yc)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Xc++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Al=0,jl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ml(e),t.set(e,n)),n}},Ml=class{constructor(e){this.id=Al++,this.code=e,this.usedTimes=0}};function Nl(e){return e===1030||e===37490||e===36285}function Pl(e,t,n,r,i,a){let o=new Yn,s=new jl,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&R(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=ts[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),M=h.isInstancedMesh===!0,te=h.isBatchedMesh===!0,ne=!!i.map,re=!!i.matcap,ie=!!x,ae=!!i.aoMap,oe=!!i.lightMap,se=!!i.bumpMap&&i.wireframe===!1,ce=!!i.normalMap,le=!!i.displacementMap,ue=!!i.emissiveMap,N=!!i.metalnessMap,de=!!i.roughnessMap,fe=i.anisotropy>0,pe=i.clearcoat>0,me=i.dispersion>0,he=i.retroreflectivity>0,ge=i.iridescence>0,_e=i.sheen>0,ve=i.transmission>0,ye=fe&&!!i.anisotropyMap,be=pe&&!!i.clearcoatMap,xe=pe&&!!i.clearcoatNormalMap,Se=pe&&!!i.clearcoatRoughnessMap,Ce=ge&&!!i.iridescenceMap,we=ge&&!!i.iridescenceThicknessMap,Te=_e&&!!i.sheenColorMap,Ee=_e&&!!i.sheenRoughnessMap,De=!!i.specularMap,Oe=!!i.specularColorMap,ke=!!i.specularIntensityMap,Ae=ve&&!!i.transmissionMap,je=ve&&!!i.thicknessMap,P=!!i.gradientMap,Me=!!i.alphaMap,Ne=i.alphaTest>0,Pe=!!i.alphaHash,Fe=!!i.extensions,Ie=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ie=e.toneMapping);let Le={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:te,batchingColor:te&&h._colorsTexture!==null,instancing:M,instancingColor:M&&h.instanceColor!==null,instancingMorph:M&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:W.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ne,matcap:re,envMap:ie,envMapMode:ie&&x.mapping,envMapCubeUVHeight:S,aoMap:ae,lightMap:oe,bumpMap:se,normalMap:ce,displacementMap:le,emissiveMap:ue,normalMapObjectSpace:ce&&i.normalMapType===1,normalMapTangentSpace:ce&&i.normalMapType===0,packedNormalMap:ce&&i.normalMapType===0&&Nl(i.normalMap.format),metalnessMap:N,roughnessMap:de,anisotropy:fe,anisotropyMap:ye,clearcoat:pe,clearcoatMap:be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,dispersion:me,retroreflection:he,iridescence:ge,iridescenceMap:Ce,iridescenceThicknessMap:we,sheen:_e,sheenColorMap:Te,sheenRoughnessMap:Ee,specularMap:De,specularColorMap:Oe,specularIntensityMap:ke,transmission:ve,transmissionMap:Ae,thicknessMap:je,gradientMap:P,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Me,alphaTest:Ne,alphaHash:Pe,combine:i.combine,mapUv:ne&&m(i.map.channel),aoMapUv:ae&&m(i.aoMap.channel),lightMapUv:oe&&m(i.lightMap.channel),bumpMapUv:se&&m(i.bumpMap.channel),normalMapUv:ce&&m(i.normalMap.channel),displacementMapUv:le&&m(i.displacementMap.channel),emissiveMapUv:ue&&m(i.emissiveMap.channel),metalnessMapUv:N&&m(i.metalnessMap.channel),roughnessMapUv:de&&m(i.roughnessMap.channel),anisotropyMapUv:ye&&m(i.anisotropyMap.channel),clearcoatMapUv:be&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:xe&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:we&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&m(i.sheenRoughnessMap.channel),specularMapUv:De&&m(i.specularMap.channel),specularColorMapUv:Oe&&m(i.specularColorMap.channel),specularIntensityMapUv:ke&&m(i.specularIntensityMap.channel),transmissionMapUv:Ae&&m(i.transmissionMap.channel),thicknessMapUv:je&&m(i.thicknessMap.channel),alphaMapUv:Me&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ce||fe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ne||Me),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ce===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ie,decodeVideoTexture:ne&&i.map.isVideoTexture===!0&&W.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ue&&i.emissiveMap.isVideoTexture===!0&&W.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Fe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Fe&&i.extensions.multiDraw===!0||te)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=ts[t];n=La.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new kl(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Fl(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Il(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ll(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Rl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Il),r.length>1&&r.sort(t||Ll),i.length>1&&i.sort(t||Ll)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function zl(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Rl,e.set(t,[i])):n>=r.length?(i=new Rl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Bl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new H,color:new G};break;case`SpotLight`:n={position:new H,direction:new H,color:new G,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new H,color:new G,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new H,skyColor:new G,groundColor:new G};break;case`RectAreaLight`:n={color:new G,position:new H,halfWidth:new H,halfHeight:new H}}return e[t.id]=n,n}}}function Vl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Hl=0;function Ul(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Wl(e){let t=new Bl,n=Vl(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new H);let i=new H,a=new Rn,o=new Rn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Ul);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=q.LTC_FLOAT_1,r.rectAreaLTC2=q.LTC_FLOAT_2):(r.rectAreaLTC1=q.LTC_HALF_1,r.rectAreaLTC2=q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Hl++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Gl(e){let t=new Wl(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Kl(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Gl(e),t.set(n,[a])):r>=i.length?(a=new Gl(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var ql=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jl=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Yl=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],Xl=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Zl=new Rn,Ql=new H,$l=new H;function eu(e,t,n){let r=new ta,i=new V,a=new V,o=new Nn,s=new Ua,c=new Wa,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Ba({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new V},radius:{value:4}},vertexShader:ql,fragmentShader:Jl}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new hi;m.setAttribute(`position`,new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new zi(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(R(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){R(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){R(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Fn(i.x,i.y,{format:Fe,type:Ce,minFilter:pe,magFilter:pe,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new _a(i.x,i.y,Se),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=P,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=N,d.map.depthTexture.magFilter=N}else l.isPointLight?(d.map=new js(i.x),d.map.depthTexture=new va(i.x,xe)):(d.map=new Fn(i.x,i.y),d.map.depthTexture=new _a(i.x,i.y,xe)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=P,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=pe,d.map.depthTexture.magFilter=pe):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=N,d.map.depthTexture.magFilter=N);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Ql.setFromMatrixPosition(l.matrixWorld),e.position.copy(Ql),$l.copy(e.position),$l.add(Yl[t]),e.up.copy(Xl[t]),e.lookAt($l),e.updateMatrixWorld(),n.makeTranslation(-Ql.x,-Ql.y,-Ql.z),Zl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Zl,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new Fn(i.x,i.y,{format:Fe,type:Ce}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function tu(e,t){function n(){let t=!1,n=new Nn,r=null,i=new Nn(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?N(e.DEPTH_TEST):de(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Vt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?N(e.STENCIL_TEST):de(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new G(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,te=0,ne=e.getParameter(e.VERSION);ne.indexOf(`WebGL`)===-1?ne.indexOf(`OpenGL ES`)!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),M=te>=2):(te=parseFloat(/^WebGL (\d)/.exec(ne)[1]),M=te>=1);let re=null,ie={},ae=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new Nn().fromArray(ae),ce=new Nn().fromArray(oe);function le(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ue={};ue[e.TEXTURE_2D]=le(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=le(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),N(e.DEPTH_TEST),o.setFunc(3),ye(!1),be(1),N(e.CULL_FACE),_e(0);function N(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function de(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function fe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function pe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function me(t){return h!==t&&(e.useProgram(t),h=t,!0)}let he={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};he[103]=e.MIN,he[104]=e.MAX;let ge={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function _e(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(de(e.BLEND),g=!1);else if(g===!1&&(N(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:z(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:z(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:z(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:z(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(he[n],he[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ge[r],ge[i],ge[o],ge[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ve(t,n){t.side===2?de(e.CULL_FACE):N(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ye(r),t.blending===1&&t.transparent===!1?_e(0):_e(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Se(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?N(e.SAMPLE_ALPHA_TO_COVERAGE):de(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function be(t){t===0?de(e.CULL_FACE):(N(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function xe(t){t!==k&&(M&&e.lineWidth(t),k=t)}function Se(t,n,r){t?(N(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):de(e.POLYGON_OFFSET_FILL)}function Ce(t){t?N(e.SCISSOR_TEST):de(e.SCISSOR_TEST)}function we(t){t===void 0&&(t=e.TEXTURE0+ee-1),re!==t&&(e.activeTexture(t),re=t)}function Te(t,n,r){r===void 0&&(r=re===null?e.TEXTURE0+ee-1:re);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(re!==r&&(e.activeTexture(r),re=r),e.bindTexture(t,n||ue[t]),i.type=t,i.texture=n)}function Ee(){let t=ie[re];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function De(){try{e.compressedTexImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Oe(){try{e.compressedTexImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function ke(){try{e.texSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ae(){try{e.texSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function P(){try{e.compressedTexSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Me(){try{e.texStorage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ne(){try{e.texStorage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Pe(){try{e.texImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Fe(){try{e.texImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ie(t){return d[t]===void 0?e.getParameter(t):d[t]}function Le(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function F(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function Re(t){ce.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ce.copy(t))}function I(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function L(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function ze(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},re=null,ie={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new G(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,se.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:N,disable:de,bindFramebuffer:fe,drawBuffers:pe,useProgram:me,setBlending:_e,setMaterial:ve,setFlipSided:ye,setCullFace:be,setLineWidth:xe,setPolygonOffset:Se,setScissorTest:Ce,activeTexture:we,bindTexture:Te,unbindTexture:Ee,compressedTexImage2D:De,compressedTexImage3D:Oe,texImage2D:Pe,texImage3D:Fe,pixelStorei:Le,getParameter:Ie,updateUBOMapping:I,uniformBlockBinding:L,texStorage2D:Me,texStorage3D:Ne,texSubImage2D:ke,texSubImage3D:Ae,compressedTexSubImage2D:je,compressedTexSubImage3D:P,scissor:F,viewport:Re,reset:ze}}function nu(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new V,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):Pt(`canvas`)}function g(e,t,n){let r=1,i=Ie(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),R(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&R(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];R(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||R(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Dt:W.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,R(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function k(){O=0}function A(){return O}function j(e){O=e}function ee(){let e=O;return e>=i.maxTextures&&R(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function M(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function te(t,i){let a=r.get(t);if(t.isVideoTexture&&Pe(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)R(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)R(`WebGLRenderer: Texture marked for update but image is incomplete`);else{be(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ne(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?be(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function re(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?be(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ie(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?xe(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ae={[ce]:e.REPEAT,[le]:e.CLAMP_TO_EDGE,[ue]:e.MIRRORED_REPEAT},oe={[N]:e.NEAREST,[de]:e.NEAREST_MIPMAP_NEAREST,[fe]:e.NEAREST_MIPMAP_LINEAR,[pe]:e.LINEAR,[me]:e.LINEAR_MIPMAP_NEAREST,[he]:e.LINEAR_MIPMAP_LINEAR},se={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ge(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&R(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ae[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ae[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ae[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,oe[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,oe[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,se[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function _e(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=M(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function ve(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ye(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ve(n.start,r.width,4),c=ve(t.start,r.width,4);n.start<=i+1&&a===c&&ve(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function be(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=_e(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=W.getPrimaries(W.workingColorSpace),r=o.colorSpace===``?null:W.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=Fe(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);ge(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===Me,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&ye(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=Zo(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=Zo(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=Ie(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=Ie(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function xe(t,o,s){if(o.image.length!==6)return;let c=_e(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=W.getPrimaries(W.workingColorSpace),r=o.colorSpace===``?null:W.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Fe(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);ge(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=Ie(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Se(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Ne(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,P(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ce(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ne(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,P(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,P(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);Ne(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,P(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,P(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function we(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),ge(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else te(i.depthTexture,0);let u=l.__webglTexture,d=P(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Ne(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Ne(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Te(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)we(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?we(i.__webglFramebuffer[0],t,0):we(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),Ce(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),Ce(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ee(t,n,i){let a=r.get(t);n!==void 0&&Se(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Te(t)}function De(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Ne(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=P(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),Ce(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ge(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Se(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Se(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),ge(c,a),Se(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ge(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Se(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Se(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&Te(t)}function Oe(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let ke=[],Ae=[];function je(t){if(t.samples>0){if(Ne(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(ke.length=0,Ae.length=0,ke.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(ke.push(l),Ae.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ae)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ke))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function P(e){return Math.min(i.maxSamples,e.samples)}function Ne(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Pe(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function Fe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(W.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&R(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):z(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ie(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ee,this.resetTextureUnits=k,this.getTextureUnits=A,this.setTextureUnits=j,this.setTexture2D=te,this.setTexture2DArray=ne,this.setTexture3D=re,this.setTextureCube=ie,this.rebindTextures=Ee,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ne,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function ru(e,t){function n(n,r=``){let i,a=W.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var iu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,au=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ou=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ya(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ba({vertexShader:iu,fragmentShader:au,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new zi(new Aa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},su=class extends Ht{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new ou,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new V,C=null,w=null,T=new wo;T.viewport=new Nn;let E=new wo;E.viewport=new Nn;let D=[T,E],O=new jo,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new mr,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new mr,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new mr,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ee(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,ee),r.removeEventListener(`inputsourceschange`,M);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,ee),r.addEventListener(`inputsourceschange`,M),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?Me:P,a=_.stencil?Ee:xe);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Fn(d.textureWidth,d.textureHeight,{format:je,type:ge,depthTexture:new _a(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Fn(f.framebufferWidth,f.framebufferHeight,{format:je,type:ge,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ce.setContext(r),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function M(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let te=new H,ne=new H;function re(e,t,n){te.setFromMatrixPosition(t.matrixWorld),ne.setFromMatrixPosition(n.matrixWorld);let r=te.distanceTo(ne),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ie(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;ie(O,i);for(let e=0;e<a.length;e++)ie(a[e],i);a.length===2?re(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),ae(e,O,i)};function ae(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Kt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let oe=null;function se(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new wo,o.layers.enable(n),o.viewport=new Nn,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new ya,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}oe&&oe(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let ce=new $o;ce.setAnimationLoop(se),this.setAnimationLoop=function(e){oe=e},this.dispose=function(){}}},cu=new Rn,lu=new U;lu.set(-1,0,0,0,1,0,0,0,1);function uu(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Ia(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(cu.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(lu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function du(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return z(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?R(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):R(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var fu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),pu=null;function mu(){return pu===null&&(pu=new Hi(fu,16,16,Fe,Ce),pu.name=`DFG_LUT`,pu.minFilter=pe,pu.magFilter=pe,pu.wrapS=le,pu.wrapT=le,pu.generateMipmaps=!1,pu.needsUpdate=!0),pu}var hu=class{constructor(e={}){let{canvas:t=Ft(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=ge}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([Le,Ie,Pe]),g=new Set([ge,xe,ye,Ee,we,Te]),_=new Uint32Array(4),v=new Int32Array(4),y=new H,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=Tt;let j=0,ee=0,M=null,te=-1,ne=null,re=new Nn,ie=new Nn,ae=null,oe=new G(0),se=0,ce=t.width,le=t.height,ue=1,N=null,de=null,fe=new Nn(0,0,ce,le),pe=new Nn(0,0,ce,le),me=!1,_e=new ta,ve=!1,be=!1,Se=new Rn,De=new H,Oe=new Nn,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function je(){return M===null?ue:1}let P=n;function Me(e,n){return t.getContext(e,n)}let Ne,Fe,F,Re,I,L,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,it,!1),t.addEventListener(`webglcontextrestored`,at,!1),t.addEventListener(`webglcontextcreationerror`,ot,!1),P===null){let t=`webgl2`;if(P=Me(t,e),P===null)throw Me(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}nt()}catch(e){throw t.removeEventListener(`webglcontextlost`,it,!1),t.removeEventListener(`webglcontextrestored`,at,!1),t.removeEventListener(`webglcontextcreationerror`,ot,!1),z(`WebGLRenderer: `+e.message),e}function nt(){Ne=new Ns(P),Ne.init(),$e=new ru(P,Ne),Fe=new cs(P,Ne,e,$e),F=new tu(P,Ne),Fe.reversedDepthBuffer&&d&&F.buffers.depth.setReversed(!0),O=P.createFramebuffer(),k=P.createFramebuffer(),A=P.createFramebuffer(),Re=new Is(P),I=new Fl,L=new nu(P,Ne,F,I,Fe,$e,Re),ze=new Ms(T),Be=new es(P),et=new os(P,Be),Ve=new Ps(P,Be,Re,et),He=new Rs(P,Ve,Be,et,Re),Xe=new Ls(P,Fe,L),qe=new ls(I),Ue=new Pl(T,ze,Ne,Fe,et,qe),We=new uu(T,I),Ge=new zl,Ke=new Kl(Ne),Ye=new as(T,ze,F,He,p,s),Je=new eu(T,He,Fe),tt=new du(P,Re,Fe,F),Ze=new ss(P,Ne,Re),Qe=new Fs(P,Ne,Re),Re.programs=Ue.programs,T.capabilities=Fe,T.extensions=Ne,T.properties=I,T.renderLists=Ge,T.shadowMap=Je,T.state=F,T.info=Re}m!==1009&&(w=new Bs(m,t.width,t.height,o,r,i));let rt=new su(T,P);this.xr=rt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(e){e!==void 0&&(ue=e,this.setSize(ce,le,!1))},this.getSize=function(e){return e.set(ce,le)},this.setSize=function(e,n,r=!0){rt.isPresenting?R(`WebGLRenderer: Can't change size while VR device is presenting.`):(ce=e,le=n,t.width=Math.floor(e*ue),t.height=Math.floor(n*ue),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ce*ue,le*ue).floor()},this.setDrawingBufferSize=function(e,n,r){ce=e,le=n,ue=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)z(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){R(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(re)},this.getViewport=function(e){return e.copy(fe)},this.setViewport=function(e,t,n,r){e.isVector4?fe.set(e.x,e.y,e.z,e.w):fe.set(e,t,n,r),F.viewport(re.copy(fe).multiplyScalar(ue).round())},this.getScissor=function(e){return e.copy(pe)},this.setScissor=function(e,t,n,r){e.isVector4?pe.set(e.x,e.y,e.z,e.w):pe.set(e,t,n,r),F.scissor(ie.copy(pe).multiplyScalar(ue).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(e){F.setScissorTest(me=e)},this.setOpaqueSort=function(e){N=e},this.setTransparentSort=function(e){de=e},this.getClearColor=function(e){return e.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=h.has(t)}if(e){let e=M.texture.type,t=g.has(e),n=Ye.getClearColor(),r=Ye.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,P.clearBufferuiv(P.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,P.clearBufferiv(P.COLOR,0,v))}else r|=P.COLOR_BUFFER_BIT}t&&(r|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&P.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,it,!1),t.removeEventListener(`webglcontextrestored`,at,!1),t.removeEventListener(`webglcontextcreationerror`,ot,!1),Ye.dispose(),Ge.dispose(),Ke.dispose(),I.dispose(),ze.dispose(),He.dispose(),et.dispose(),tt.dispose(),Ue.dispose(),rt.dispose(),rt.removeEventListener(`sessionstart`,pt),rt.removeEventListener(`sessionend`,mt),ht.stop()};function it(e){e.preventDefault(),Lt(`WebGLRenderer: Context Lost.`),E=!0}function at(){Lt(`WebGLRenderer: Context Restored.`),E=!1;let e=Re.autoReset,t=Je.enabled,n=Je.autoUpdate,r=Je.needsUpdate,i=Je.type;nt(),Re.autoReset=e,Je.enabled=t,Je.autoUpdate=n,Je.needsUpdate=r,Je.type=i}function ot(e){z(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function st(e){let t=e.target;t.removeEventListener(`dispose`,st),ct(t)}function ct(e){lt(e),I.remove(e)}function lt(e){let t=I.get(e).programs;t!==void 0&&(t.forEach(function(e){Ue.releaseProgram(e)}),e.isShaderMaterial&&Ue.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ke);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Et(e,t,n,r,i);F.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ve.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;et.setup(i,r,s,n,c);let h,g=Ze;if(c!==null&&(h=Be.get(c),g=Qe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(F.setLineWidth(r.wireframeLinewidth*je()),g.setMode(P.LINES)):g.setMode(P.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),F.setLineWidth(e*je()),i.isLineSegments?g.setMode(P.LINES):i.isLineLoop?g.setMode(P.LINE_LOOP):g.setMode(P.LINE_STRIP)}else i.isPoints?g.setMode(P.POINTS):i.isSprite&&g.setMode(P.TRIANGLES);if(i.isBatchedMesh){if(Ne.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Be.get(c).bytesPerElement:1,o=I.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(P,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ut(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),ve===!0&&qe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,xt(e,t,r),e.side=0,e.needsUpdate=!0,xt(e,t,r),e.side=2):xt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Ke.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),be=this.localClippingEnabled,ve=qe.init(this.clippingPlanes,be),ve===!0&&qe.setGlobalState(this.clippingPlanes,t),D!==null&&Je.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];ut(o,n,t,e),r.add(o)}else ut(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=I.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Ne.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let dt=null;function ft(e){dt&&dt(e)}function pt(){ht.stop()}function mt(){ht.start()}let ht=new $o;ht.setAnimationLoop(ft),typeof self<`u`&&ht.setContext(self),this.setAnimationLoop=function(e){dt=e,rt.setAnimationLoop(e),e===null?ht.stop():ht.start()},rt.addEventListener(`sessionstart`,pt),rt.addEventListener(`sessionend`,mt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){z(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=rt.enabled===!0&&rt.isPresenting===!0,r=w!==null&&(M===null||n)&&w.begin(T,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(t),t=rt.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,M),x=Ke.get(e,C.length),x.init(t),x.state.textureUnits=L.getTextureUnits(),C.push(x),Se.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),_e.setFromProjectionMatrix(Se,jt,t.reversedDepth),be=this.localClippingEnabled,ve=qe.init(this.clippingPlanes,be),b=Ge.get(e,S.length),b.init(),S.push(b),rt.enabled===!0&&rt.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&gt(e,t,-1/0,T.sortObjects)}gt(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(N,de),Ae=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Ae&&Ye.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ve===!0&&qe.beginShadows();let i=x.state.shadowsArray;if(Je.render(i,e,t),ve===!0&&qe.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];vt(n,r,e,a)}Ae&&Ye.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];_t(b,e,n,n.viewport)}}else r.length>0&&vt(n,r,e,t),Ae&&Ye.render(e),_t(b,e,t)}M!==null&&ee===0&&(L.updateMultisampleRenderTarget(M),L.updateRenderTargetMipmap(M)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),et.resetDefaultState(),te=-1,ne=null,C.pop(),C.length>0?(x=C[C.length-1],L.setTextureUnits(x.state.textureUnits),ve===!0&&qe.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function gt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(_e)){r&&Oe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Se);let i=He.update(e),a=e.material;a.visible&&b.push(e,i,a,n,Oe.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(_e))){let i=He.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Oe.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Oe.copy(e.boundingSphere.center)),Oe.applyMatrix4(e.matrixWorld).applyMatrix4(Se)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,Oe.z,s,t)}}else a.visible&&b.push(e,i,a,n,Oe.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)gt(i[e],t,n,r)}function _t(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),ve===!0&&qe.setGlobalState(T.clippingPlanes,n),r&&F.viewport(re.copy(r)),i.length>0&&yt(i,t,n),a.length>0&&yt(a,t,n),o.length>0&&yt(o,t,n),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function vt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=Ne.has(`EXT_color_buffer_half_float`)||Ne.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new Fn(1,1,{generateMipmaps:!0,type:e?Ce:ge,minFilter:he,samples:Math.max(4,Fe.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:W.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||re;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(oe),se=T.getClearAlpha(),se<1&&T.setClearColor(16777215,.5),T.clear(),Ae&&Ye.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),ve===!0&&qe.setGlobalState(T.clippingPlanes,r),yt(e,n,r),L.updateMultisampleRenderTarget(a),L.updateRenderTargetMipmap(a),Ne.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,bt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(L.updateMultisampleRenderTarget(a),L.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(oe,se),d!==void 0&&(r.viewport=d),T.toneMapping=u}function yt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&bt(o,t,n,s,l,c)}}function bt(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function xt(e,t,n){t.isScene!==!0&&(t=ke);let r=I.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Ue.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Ue.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=ze.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,st),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Ct(e,s),d}else s.uniforms=Ue.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=Ue.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=qe.uniform),Ct(e,s),r.needsLights=Ot(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function St(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=qc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Ct(e,t){let n=I.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function wt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function Et(e,t,n,r,i){t.isScene!==!0&&(t=ke),L.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?T.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:W.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=ze.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=I.get(r),y=x.state.lights;if(ve===!0&&(be===!0||e!==ne)){let t=e===ne&&r.id===te;qe.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==qe.numPlanes||v.numIntersection!==qe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=xt(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(F.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==te&&(te=r.id,w=!0),v.needsLights){let e=wt(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||ne!==e){F.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(P,`projectionMatrix`,e.projectionMatrix),O.setValue(P,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(P,De.setFromMatrixPosition(e.matrixWorld)),Fe.logarithmicDepthBuffer&&O.setValue(P,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(P,`isOrthographic`,e.isOrthographicCamera===!0),ne!==e&&(ne=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(P,`sunShadowMap`,y.state.sunShadowMap,L),y.state.directionalShadowMap.length>0&&O.setValue(P,`directionalShadowMap`,y.state.directionalShadowMap,L),y.state.spotShadowMap.length>0&&O.setValue(P,`spotShadowMap`,y.state.spotShadowMap,L),y.state.pointShadowMap.length>0&&O.setValue(P,`pointShadowMap`,y.state.pointShadowMap,L)),i.isSkinnedMesh){O.setOptional(P,i,`bindMatrix`),O.setOptional(P,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(P,`boneTexture`,e.boneTexture,L))}i.isBatchedMesh&&(O.setOptional(P,i,`batchingTexture`),O.setValue(P,`batchingTexture`,i._matricesTexture,L),O.setOptional(P,i,`batchingIdTexture`),O.setValue(P,`batchingIdTexture`,i._indirectTexture,L),O.setOptional(P,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(P,`batchingColorTexture`,i._colorsTexture,L));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Xe.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(P,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=mu()),w){if(O.setValue(P,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&Dt(k,E),a&&r.fog===!0&&We.refreshFogUniforms(k,a),We.refreshMaterialUniforms(k,r,ue,le,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}qc.upload(P,St(v),k,L)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(qc.upload(P,St(v),k,L),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(P,`center`,i.center),O.setValue(P,`modelViewMatrix`,i.modelViewMatrix),O.setValue(P,`normalMatrix`,i.normalMatrix),O.setValue(P,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];tt.update(n,S),tt.bind(n,S)}}return S}function Dt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Ot(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=I.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),I.get(e.texture).__webglTexture=t,I.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=I.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,j=t,ee=n;let r=null,i=!1,a=!1;if(e){let o=I.get(e);if(o.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(P.FRAMEBUFFER,o.__webglFramebuffer),re.copy(e.viewport),ie.copy(e.scissor),ae=e.scissorTest,F.viewport(re),F.scissor(ie),F.setScissorTest(ae),te=-1;return}if(o.__webglFramebuffer===void 0)L.setupRenderTarget(e);else if(o.__hasExternalTextures)L.rebindTextures(e,I.get(e.texture).__webglTexture,I.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&I.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);L.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=I.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&L.useMultisampledRTT(e)===!1?I.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,re.copy(e.viewport),ie.copy(e.scissor),ae=e.scissorTest}else re.copy(fe).multiplyScalar(ue).floor(),ie.copy(pe).multiplyScalar(ue).floor(),ae=me;if(n!==0&&(r=O),F.bindFramebuffer(P.FRAMEBUFFER,r)&&F.drawBuffers(e,r),F.viewport(re),F.scissor(ie),F.setScissorTest(ae),i){let r=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=I.get(e.textures[t]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,t.__webglTexture,n)}te=-1};function kt(e){let t=I.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Fe.textureFormatReadable(e.format),t.__typeReadable=Fe.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){F.bindFramebuffer(P.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let u=kt(o);if(u.__formatReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&P.readPixels(t,n,r,i,$e.convert(c),$e.convert(l),a)}finally{let e=M===null?null:I.get(M).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){F.bindFramebuffer(P.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let d=kt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.bufferData(P.PIXEL_PACK_BUFFER,a.byteLength,P.STREAM_READ),P.readPixels(t,n,r,i,$e.convert(l),$e.convert(u),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let p=M===null?null:I.get(M).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,p);let m=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Bt(P,m,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,a),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(f),P.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;L.setTexture2D(e,0),P.copyTexSubImage2D(P.TEXTURE_2D,n,0,0,o,s,i,a),F.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=$e.convert(t.format),_=$e.convert(t.type),v;t.isData3DTexture?(L.setTexture3D(t,0),v=P.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(L.setTexture2DArray(t,0),v=P.TEXTURE_2D_ARRAY):(L.setTexture2D(t,0),v=P.TEXTURE_2D),F.activeTexture(P.TEXTURE0),F.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,t.flipY),F.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),F.pixelStorei(P.UNPACK_ALIGNMENT,t.unpackAlignment);let y=F.getParameter(P.UNPACK_ROW_LENGTH),b=F.getParameter(P.UNPACK_IMAGE_HEIGHT),x=F.getParameter(P.UNPACK_SKIP_PIXELS),S=F.getParameter(P.UNPACK_SKIP_ROWS),C=F.getParameter(P.UNPACK_SKIP_IMAGES);F.pixelStorei(P.UNPACK_ROW_LENGTH,h.width),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,h.height),F.pixelStorei(P.UNPACK_SKIP_PIXELS,l),F.pixelStorei(P.UNPACK_SKIP_ROWS,u),F.pixelStorei(P.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=I.get(e),r=I.get(t),h=I.get(n.__renderTarget),g=I.get(r.__renderTarget);F.bindFramebuffer(P.READ_FRAMEBUFFER,h.__webglFramebuffer),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(e).__webglTexture,i,d+n),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(t).__webglTexture,a,m+n)),P.blitFramebuffer(l,u,o,s,f,p,o,s,P.DEPTH_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||I.has(e)){let n=I.get(e),r=I.get(t);F.bindFramebuffer(P.READ_FRAMEBUFFER,k),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,n.__webglTexture,i),T?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,r.__webglTexture,a),i===0?T?P.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):P.copyTexSubImage2D(v,a,f,p,l,u,o,s):P.blitFramebuffer(l,u,o,s,f,p,o,s,P.COLOR_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?P.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h);F.pixelStorei(P.UNPACK_ROW_LENGTH,y),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,b),F.pixelStorei(P.UNPACK_SKIP_PIXELS,x),F.pixelStorei(P.UNPACK_SKIP_ROWS,S),F.pixelStorei(P.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&P.generateMipmap(v),F.unbindTexture()},this.initRenderTarget=function(e){I.get(e).__webglFramebuffer===void 0&&L.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?L.setTextureCube(e,0):e.isData3DTexture?L.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?L.setTexture2DArray(e,0):L.setTexture2D(e,0),F.unbindTexture()},this.resetState=function(){j=0,ee=0,M=null,F.reset(),et.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return jt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=W._getDrawingBufferColorSpace(e),t.unpackColorSpace=W._getUnpackColorSpace()}},gu={red:`#b3282f`,redLight:`#ef5f66`,redDark:`#8e1f25`,graphite:`#1c1d21`},J={sky:`#20373d`,ground:`#2f5a5e`,groundDark:`#284d51`,asphalt:`#3f4b53`,road:`#353f46`,concrete:`#8f9a9c`,floor:`#d6d3cb`,wallInside:`#ece9e2`,wallOutside:`#2c4f50`,wallBase:gu.red,wallCap:`#f4f2ec`,lineYellow:`#f4c430`,lineWhite:`#eef1f2`,laneTrucks:`#2f7fc1`,laneWalk:`#3fa34d`,laneForklift:`#c8413a`,rackUpright:`#2b5aa6`,rackBeam:`#e07b24`,pallet:`#b98a55`,carton:`#c99a62`,film:`#dde8ec`,forklift:`#f29a1f`,cab:`#f08a24`,cabFleet:gu.red,trailer:`#f3f3f1`,dark:`#2b2f36`,rubber:`#1d2024`,door:`#2a3138`,glass:`#27465c`,skin:`#e0b48f`,vest:`#3b6fd6`,helmet:`#f4f2ec`,trunk:`#6b4b2e`,foliage:`#3f7f4f`,steel:`#9aa3a8`},_u=new Map;function Y(e,t={}){let n=e+JSON.stringify(t),r=_u.get(n);return r||(r=new Ha({color:e,roughness:.85,metalness:.05,flatShading:!0,...t}),_u.set(n,r)),r}function vu(e,t,n){return`#`+new G(e).lerp(new G(t),n).getHexString()}function yu(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var bu=(e,t,n)=>t+Math.floor(e()*(n-t+1)),xu=(e,t,n)=>t+e()*(n-t);function Su(e,t,n,r){let i=t;for(;;){let t=Math.floor((i-n)/3600);if(t>=r.length)return null;let a=n+(t+1)*3600,o=r[Math.max(0,t)];if(o<=0){i=a;continue}let s=-Math.log(1-e())/o*3600;if(i+s>a)i=a;else return i+s}}function X(e,t,n,r,i=0,a=0,o=0){let s=new zi(new ba(e,t,n),r);return s.position.set(i,a,o),s.castShadow=!0,s.receiveShadow=!0,s}function Cu(e,t,n,r,i,a){let o=new zi(new Aa(e,t),n);return o.rotation.x=-Math.PI/2,o.position.set(r,i,a),o.receiveShadow=!0,o}function wu(e,t,n,r=0,i=0,a=0,o=12){let s=new zi(new Sa(e,e,t,o),n);return s.position.set(r,i,a),s.castShadow=!0,s.receiveShadow=!0,s}var Tu=class{geometry;material;matrices=[];colors=[];tmp=new dr;constructor(e,t){this.geometry=e,this.material=t}add(e,t,n,r=1,i=1,a=1,o=0,s){this.tmp.position.set(e,t,n),this.tmp.scale.set(r,i,a),this.tmp.rotation.set(0,o,0),this.tmp.updateMatrix(),this.matrices.push(this.tmp.matrix.clone()),this.colors.push(s?new G(s):null)}get count(){return this.matrices.length}build(){let e=new Zi(this.geometry,this.material,this.matrices.length);if(this.matrices.forEach((t,n)=>e.setMatrixAt(n,t)),this.colors.some(e=>e)){let t=new G(`#ffffff`);this.colors.forEach((n,r)=>e.setColorAt(r,n??t))}return e.castShadow=!0,e.receiveShadow=!0,e}};function Eu(e,t={width:4}){let{width:n,color:r=`#ffffff`,background:i,weight:a=800,padding:o=24}=t,s=document.createElement(`canvas`),c=s.getContext(`2d`),l=`${a} 96px "Segoe UI", system-ui, sans-serif`;c.font=l;let u=c.measureText(e).width;s.width=Math.ceil(u+o*2),s.height=96+o*2,c.font=l,i&&(c.fillStyle=i,c.fillRect(0,0,s.width,s.height)),c.fillStyle=r,c.textBaseline=`middle`,c.textAlign=`center`,c.fillText(e,s.width/2,s.height/2+4);let d=new ga(s);d.colorSpace=Tt,d.anisotropy=8;let f=n*s.height/s.width,p=new Di({map:d,transparent:!i,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return new zi(new Aa(n,f),p)}function Du(e,t,n,r,i,a=`#ffffff`,o=0){let s=Eu(e,{width:i,color:a});return s.rotation.set(-Math.PI/2,0,o),s.position.set(t,n+.02,r),s.renderOrder=2,s}function Ou(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new hi,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=ku(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=ku(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function ku(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new ei(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function Au(e){return`${e.material.uuid}|${e.castShadow}|${e.receiveShadow}`}function ju(e){let t=[];for(let n of e.values()){let e=n.geometries;e.some(e=>e.index)&&e.some(e=>!e.index)&&(e=e.map(e=>e.index?e.toNonIndexed():e));let r=e.length===1?e[0]:Ou(e,!1);if(!r)continue;let i=new zi(r,n.material);i.castShadow=n.castShadow,i.receiveShadow=n.receiveShadow,t.push(i)}return t}var Mu=e=>e.isMesh&&!e.isInstancedMesh&&!Array.isArray(e.material);function Nu(e){let t=new Map;for(let n of[...e.children]){if(!Mu(n))continue;n.updateMatrix();let r=Au(n),i=t.get(r);i||(i={material:n.material,castShadow:n.castShadow,receiveShadow:n.receiveShadow,geometries:[]},t.set(r,i)),i.geometries.push(n.geometry.clone().applyMatrix4(n.matrix)),e.remove(n)}return e.add(...ju(t)),e.userData.dynamic=!0,e}function Pu(e,t){let n=e.index?e.toNonIndexed():e,r=new hi;for(let[e,i]of Object.entries(n.attributes)){let n=i;r.setAttribute(e,new ei(n.array.slice(t.start*n.itemSize,(t.start+t.count)*n.itemSize),n.itemSize,n.normalized))}return r}function Fu(e){e.updateMatrixWorld(!0);let t=new Map,n=[],r=(e,n)=>{let r=`${e.uuid}|${n.castShadow}|${n.receiveShadow}`,i=t.get(r);return i||(i={material:e,castShadow:n.castShadow,receiveShadow:n.receiveShadow,geometries:[]},t.set(r,i)),i},i=e=>{if(e.userData.dynamic)return;let t=e;if(Mu(e)&&!e.material.transparent)r(t.material,t).geometries.push(t.geometry.clone().applyMatrix4(t.matrixWorld)),n.push(t);else if(t.isMesh&&Array.isArray(t.material)&&t.geometry.groups.length&&t.material.every(e=>!e.transparent)){let e=t.material;for(let n of t.geometry.groups)r(e[n.materialIndex??0],t).geometries.push(Pu(t.geometry,n).applyMatrix4(t.matrixWorld));n.push(t)}for(let t of e.children)i(t)};for(let t of e.children)i(t);for(let e of n)e.removeFromParent();for(let n of ju(t))e.add(n);return n.length}function Iu(e,t,n,r,i){let a=wu(e,t,Y(J.rubber),n,r,i,10);return a.rotation.x=Math.PI/2,a}var Lu=new ba(1,1,1).translate(0,.5,0);function Ru(e={}){let{cabColor:t=J.cab,boxColor:n=J.trailer}=e,r=new fr,i=6.6;r.add(X(w-.3,.3,1.1,Y(J.dark),(w-.3)/2+.15,.95,0)),r.add(X(i,2.6,2.5,Y(n),i/2,2.5,0)),r.add(X(6.619999999999999,.18,2.52,Y(t),i/2,1.32,0)),r.add(X(.06,2.4,2.3,Y(`#d9dcdc`),0,2.5,0)),r.add(X(2.3,2.2,2.4,Y(t),8,2.05,0)),r.add(X(1.4,.5,2.3,Y(t),7.55,3.3,0)),r.add(X(.05,.9,2.1,Y(J.glass),9.16,2.45,0)),r.add(X(1,.75,2.42,Y(J.glass),8.35,2.5,0)),r.add(X(.12,.35,2.3,Y(J.dark),9.18,1.25,0));for(let e of[1.4,2.5,8.4])for(let t of[-1.05,1.05])r.add(Iu(.5,.35,e,.5,t));return Nu(r)}function zu(){let e=new fr,t=Y(J.forklift),n=Y(J.dark);e.add(X(1.5,.7,1,t,-.05,.6,0)),e.add(X(.45,.85,1.02,n,-.85,.62,0)),e.add(X(.4,.12,.45,n,-.3,1,0)),e.add(X(.1,.45,.45,n,-.5,1.25,0));for(let t of[.35,-.65])for(let r of[-.42,.42])e.add(X(.06,1.2,.06,n,t,1.5,r));e.add(X(1.1,.06,.95,t,-.15,2.12,0));for(let t of[-.3,.3])e.add(X(.1,2.3,.1,n,.78,1.25,t));for(let t of[-.5,.5])e.add(Iu(.28,.22,.45,.28,t)),e.add(Iu(.23,.2,-.65,.23,t));Nu(e);let r=new fr;for(let e of[-.22,.22])r.add(X(.08,2.2,.08,n,.84,1.2,e));r.add(X(.06,.55,.8,n,.9,.33,0));for(let e of[-.25,.25])r.add(X(1.1,.05,.12,Y(J.steel),1.45,.05,e));Nu(r);let i=new fr,a=new zi(Wu(),Y(J.pallet));a.position.set(1.5,0,0),a.rotation.y=Math.PI/2;let o=new zi(Lu,new Ha({roughness:.85,metalness:.05,flatShading:!0}));return o.position.set(1.5,Hu,0),o.scale.set(1.14,1,.96),i.add(a,o),i.visible=!1,r.add(i),e.add(r),{root:e,lift:r,cargo:i,load:o}}function Bu(e=J.vest){let t=new fr;t.add(X(.22,.8,.34,Y(J.dark),0,.4,0));let n=new zi(new xa(.2,.4,3,8),Y(e));n.position.y=1.15,n.scale.z=1.25,n.castShadow=!0,t.add(n);let r=new zi(new ja(.13,10,8),Y(J.skin));r.position.y=1.6,r.castShadow=!0,t.add(r);let i=new zi(new ja(.155,10,6,0,Math.PI*2,0,Math.PI/2),Y(J.helmet));return i.position.y=1.64,i.castShadow=!0,t.add(i),Nu(t)}function Vu(e){let t=new fr;t.add(X(4.2,.75,1.8,Y(e),0,.6,0)),t.add(X(2.2,.6,1.6,Y(e),-.2,1.25,0)),t.add(X(2.25,.45,1.62,Y(J.glass),-.2,1.25,0));for(let e of[-1.35,1.35])for(let n of[-.85,.85])t.add(Iu(.32,.22,e,.32,n));return t}var Hu=.144,Uu=null;function Wu(){if(Uu)return Uu;let e=[],t=new ba(1,.022,1.2);t.translate(0,.13299999999999998,0),e.push(t);for(let t of[-.45,0,.45]){let n=new ba(.1,.022,1.2);n.translate(t,.011,0),e.push(n);for(let n of[-.54,0,.54]){let r=new ba(.1,.1,.12);r.translate(t,.072,n),e.push(r)}}return Uu=Ou(e),Uu}var Gu=[`#c99a62`,`#b9875a`,`#d6ab74`,`#c08f5c`,`#a97a4d`],Ku=class{pallets=new Tu(Wu(),Y(J.pallet));loads=new Tu(Lu,Y(`#ffffff`));add(e,t,n,r,i=0){this.pallets.add(e,t,n,1,1,1,i),r&&this.loads.add(e,t+Hu,n,.96,r.height,1.14,i,r.color)}build(){let e=new fr;return this.pallets.count&&e.add(this.pallets.build()),this.loads.count&&e.add(this.loads.build()),e}},qu=e=>o.find(t=>t.id===e);function Ju(e,t){let n=yu(1234);Yu(t),Xu(e,t),Zu(e,t,n,()=>Gu[Math.floor(n()*Gu.length)]),Qu(e,t)}function Yu(r){for(let o of[...i,...a]){let i=o.x+o.facing*(t.wallThickness+w+1.5);r.addRect(`muelle-${o.id}`,A(o.id,o.kind),Math.min(o.x-o.facing*1.5,i),Math.max(o.x-o.facing*1.5,i),0,e+f+.6,o.z-n/2,o.z+n/2)}}function Xu(t,n){let r=qu(`recepcion`).maxX-2.2,i=-15.5,a=new fr;a.add(X(1.6,.06,.8,Y(`#e7e2d6`),r,e+.9,i));for(let[t,n]of[[-.7,-.33],[.7,-.33],[-.7,.33],[.7,.33]])a.add(X(.05,.9,.05,Y(J.dark),r+t,e+.45,i+n));a.add(X(.5,.35,.04,Y(J.dark),r,e+1.15,-15.7)),a.add(X(.48,.3,.01,Y(`#4aa3df`,{emissive:`#1b5f8f`}),r,e+1.15,-15.675)),t.add(a);let o=Bu();o.position.set(r,e,-14.75),o.rotation.y=Math.PI/2,t.add(o),n.addObject(`operario-control`,ee.operario,o,.2)}function Zu(t,n,r,i){let{tableX:a,shelfX:o}=p,s=Y(`#e7e2d6`),c=Y(J.dark);p.stationsZ.forEach((l,u)=>{let d=new fr;d.add(X(1,.06,2.6,s,a,e+.9,l));for(let t of[-.42,.42])for(let n of[-1.2,1.2])d.add(X(.06,.9,.06,c,a+t,e+.45,l+n));let f=2+Math.floor(r()*3);for(let t=0;t<f;t++){let n=.3+r()*.25;d.add(X(n,n*.8,n,Y(i()),a+(r()-.5)*.5,e+.93+n*.8/2,l-1+t*.6))}for(let t of[-1.1,1.1])for(let n of[-.25,.25])d.add(X(.05,2,.05,Y(J.steel),o+n,e+1,l+t));for(let t of[.3,1,1.7]){d.add(X(.6,.04,2.3,Y(J.steel),o,e+t,l));for(let n=0;n<4;n++)r()<.25||d.add(X(.42,.3,.42,Y(i()),o,e+t+.17,l-.85+n*.57))}t.add(d),n.addObject(`puesto-${u+1}`,ee.puesto,d,.15)})}function Qu(t,n){let r=qu(`despacho`),i=Y(J.lineWhite),o=h[0]-.7,s=h[h.length-1]+.7,c=s-o,l=e+.012;for(let e of a){let n=(o+s)/2;for(let r of[-1,1])t.add(Cu(c,.1,i,n,l,e.z+r*1.6));t.add(Cu(.1,3.2,i,o,l,e.z))}let u=(r.minX+r.maxX)/2,d=15.4,f=new fr;f.add(wu(1,.12,Y(J.dark),u,e+.06,d,20)),f.add(X(.3,2.6,.3,Y(J.forklift),u+1.4,e+1.3,d)),f.add(X(.5,.4,.4,Y(J.dark),u+1.2,e+1.2,d)),f.add(wu(.08,.5,Y(J.film),u+1,e+1.2,d,8));let p=new Ku;p.add(u,e+.12,d,{height:1.2,color:J.film}),f.add(p.build()),t.add(f),n.addRect(`envolvedora`,ee.envolvedora,u-1.1,u+1.65,e,e+2.7,14.3,16.5)}function $u(t,n){let{bays:r,bayWidth:i,levels:a,levelHeight:o,depth:l,flue:u,uprightHeight:d}=s,f=new Tu(new ba(.09,d,.09),Y(J.rackUpright)),p=new Tu(new ba(.04,.04,l),Y(J.rackUpright)),m=new Tu(new ba(i-.09,.12,.05),Y(J.rackBeam));for(let s of c){let c=s.maxX-s.minX;for(let t of[-1,1]){let n=s.z+t*(u/2+l/2);for(let t=0;t<=r;t++){let r=s.minX+t*i;for(let t of[-1,1])f.add(r,e+d/2,n+t*l/2);for(let t=.4;t<d;t+=1.5)p.add(r,e+t,n)}for(let t=0;t<r;t++){let r=s.minX+(t+.5)*i;for(let t=1;t<a;t++)for(let i of[-1,1])m.add(r,e+t*o-.06,n+i*l/2)}}for(let n of[-1,1]){let r=Eu(s.id,{width:1.3,color:gu.redLight,background:gu.graphite,padding:30});r.position.set(n===1?s.maxX+.08:s.minX-.08,e+d+.55,s.z),r.rotation.y=n*Math.PI/2,t.add(r)}n.addRect(`estanteria-${s.id}`,{...k,title:`Estantería ${s.id}`},s.minX-.1,s.minX+c+.1,e,e+d,s.z-l-u/2-.1,s.z+l+u/2+.1)}t.add(f.build(),p.build(),m.build())}var ed=11;function td(e,t){let n=yu(7);e.add(Cu(460,340,Y(J.ground),0,0,0)),e.add(Cu(_.maxX-_.minX,_.maxZ-_.minZ,Y(J.asphalt),(_.minX+_.maxX)/2,.01,(_.minZ+_.maxZ)/2)),nd(e),rd(e,t),id(e,t),ad(e),od(e);let r=sd(e,t);return cd(e,t,n),ld(e,n),r}function nd(e){let t=Y(J.road),n=Y(J.lineWhite);e.add(Cu(S.maxX-S.minX,S.width,t,0,.02,S.z));let r=new Tu(new Aa(3,.25).rotateX(-Math.PI/2),n);for(let e=S.minX+2;e<S.maxX;e+=7)r.add(e,.03,S.z);e.add(r.build());for(let t of[-1,1])e.add(Cu(S.maxX-S.minX,.2,n,0,.03,S.z+t*(S.width/2-.4)));let i=_.maxZ,a=S.z-S.width/2;e.add(Cu(v.width,a-i,t,v.x,.02,(i+a)/2)),e.add(Cu(x.maxX-x.minX,a-x.minZ,t,(x.minX+x.maxX)/2,.02,(x.minZ+a)/2)),e.add(Cu(1.4,b.minZ-_.maxZ,Y(J.laneWalk),24,.03,(_.maxZ+b.minZ)/2))}function rd(e,n){let r=Y(J.laneTrucks),{minX:i,maxX:a,minZ:o,maxZ:s,width:c}=C;[[(i+a)/2,o,a-i+c,c],[(i+a)/2,s,a-i+c,c],[i,(o+s)/2,c,s-o],[a,(o+s)/2,c,s-o],[v.x,(s+_.maxZ)/2,c,_.maxZ-s]].forEach(([t,i,a,o],s)=>{e.add(Cu(a,o,r,t,.03,i)),n.addRect(`carriles-${s}`,j.carriles,t-a/2,t+a/2,0,.4,i-o/2,i+o/2)});let l=new Tu(new Aa(.5,c).rotateX(-Math.PI/2),Y(J.lineWhite));for(let e=-2;e<=2;e++)l.add(24+e*.9,.04,s);e.add(l.build()),e.add(Cu(1.4,_.maxZ-t.maxZ,Y(J.laneWalk),24,.024999999999999998,(t.maxZ+_.maxZ)/2))}function id(e,t){let n=Y(J.lineWhite);for(let r of y){let i=r.firstX-r.spacing/2,a=i+r.stalls*r.spacing;for(let t=0;t<=r.stalls;t++)e.add(Cu(.18,ed,n,i+t*r.spacing,.03,r.z+ed/2));e.add(Cu(a-i,.18,n,(i+a)/2,.03,r.z+ed));let o=r.id===`espera-recepcion`?`PLAYA DE ESPERA`:`PLAYA DE DESPACHO`;e.add(Du(o,(i+a)/2,.03,r.z+ed+2.2,15,J.lineWhite)),t.addRect(r.id,j[r.id],i,a,0,4,r.z,r.z+ed)}}function ad(e){let t=Y(J.lineYellow),n=w+2.5;for(let r of[...i,...a]){let i=r.x+r.facing*(n/2+.2);for(let a of[-1,1])e.add(Cu(n,.16,t,i,.03,r.z+a*1.75));e.add(Du(r.id,r.x+r.facing*(n+2.2),.03,r.z,2.4,J.lineYellow))}}function od(e){let t=new Tu(new Sa(.06,.06,2.2,6),Y(J.steel)),n=Y(`#9fb3b5`,{transparent:!0,opacity:.28,depthWrite:!1}),r=Y(J.steel),{minX:i,maxX:a,minZ:o,maxZ:s}=_,c=[[v.x-v.width/2,v.x+v.width/2],[23.1,24.9]],l=(i,a,o,s)=>{let c=Math.hypot(o-i,s-a),l=Math.atan2(-(s-a),o-i),u=(i+o)/2,d=(a+s)/2,f=new zi(new ba(c,2,.03),n);f.position.set(u,1.1,d),f.rotation.y=l,e.add(f);let p=new zi(new ba(c,.06,.06),r);p.position.set(u,2.15,d),p.rotation.y=l,e.add(p);let m=Math.max(1,Math.round(c/4));for(let e=0;e<=m;e++)t.add(i+(o-i)*e/m,1.1,a+(s-a)*e/m)};l(i,o,a,o),l(i,o,i,s),l(a,o,a,s);let u=i;for(let[e,t]of c)l(u,s,e,s),u=t;l(u,s,a,s),e.add(t.build())}function sd(e,t){let n=new fr,r=v.x+v.width/2+2.6,i=_.maxZ+3;n.add(X(3.2,2.8,3.2,Y(J.wallInside),r,1.4,i)),n.add(X(3.3,.9,3.3,Y(J.glass),r,1.8,i)),n.add(X(4,.25,4,Y(J.wallOutside),r,2.95,i)),n.add(X(3.25,.3,3.25,Y(J.wallBase),r,.15,i));let a=Y(`#d33b2c`),o=Y(J.lineWhite),s=[];for(let t of[-1,1]){let r=v.x+t*(v.width/2-.4);n.add(X(.4,1.1,.4,Y(J.dark),r,.55,_.maxZ+.6));let i=new fr,c=v.width/2-1.2;for(let e=0;e<6;e++)i.add(X(c/6,.12,.1,e%2?o:a,-t*(.2+c/6*(e+.5)),0,0));Nu(i),i.traverse(e=>e.castShadow=!1),i.position.set(r,1,_.maxZ+.6),e.add(i),s.push({arm:i,side:t})}return e.add(n),t.addRect(`porteria`,j.porteria,r-2,r+2,0,3.3,i-2,i+2),s}function cd(e,t,n){let r=b.maxX-b.minX,i=b.maxZ-b.minZ,a=(b.minX+b.maxX)/2,o=(b.minZ+b.maxZ)/2,s=new fr;s.add(X(r,7.2,i,Y(J.wallInside),a,3.6,o));for(let e of[2,5.4])s.add(X(r+.1,1.5,i+.1,Y(J.glass),a,e,o));s.add(X(r+.6,.35,i+.6,Y(J.wallOutside),a,7.35,o)),s.add(X(r+.12,.4,i+.12,Y(J.wallBase),a,.2,o));let c=Eu(`HUB LOGÍSTICO`,{width:11,color:`#ffffff`,background:gu.red});c.position.set(a,8.6,b.maxZ-.5),s.add(c),s.add(X(.15,1.2,.15,Y(J.dark),a-4,8,b.maxZ-.6)),s.add(X(.15,1.2,.15,Y(J.dark),a+4,8,b.maxZ-.6)),e.add(s),t.addObject(`oficinas`,j.oficinas,s);let l=Y(J.lineWhite),u=2.8,d=Math.floor((x.maxX-x.minX)/u),f=[`#c0392b`,`#ecf0f1`,`#2c3e50`,`#7f8c8d`,`#2980b9`,`#f1c40f`,`#ecf0f1`,`#34495e`];for(let t=0;t<=d;t++)if(e.add(Cu(.14,5,l,x.minX+t*u,.03,x.minZ+2.5)),t<d&&n()<.7){let r=Vu(f[Math.floor(n()*f.length)]);r.rotation.y=Math.PI/2,r.position.set(x.minX+(t+.5)*u,0,x.minZ+2.5),e.add(r)}}function ld(e,t){let n=new Tu(new Sa(.22,.3,2.4,6).translate(0,1.2,0),Y(J.trunk)),r=new Tu(new ka(1,0),Y(`#ffffff`)),i=[`#3f7f4f`,`#4a8c55`,`#36704a`,`#5a9a5e`],a=(e,t)=>e>_.minX-4&&e<_.maxX+4&&t>_.minZ-4&&t<_.maxZ+3||Math.abs(t-S.z)<S.width/2+3||e>v.x-v.width/2-3&&e<v.x+v.width/2+3&&t<S.z||e>x.minX-3&&e<x.maxX+3&&t>b.minZ-4&&t<S.z||Math.abs(e-24)<2.5&&t<b.minZ;for(let e=-150;e<=150;e+=7)for(let o=-110;o<=120;o+=7){let s=e+(t()-.5)*5,c=o+(t()-.5)*5,l=s>_.minX-25&&s<_.maxX+25&&c>_.minZ-25&&c<_.maxZ+40;if(a(s,c)||t()>(l?.55:.3))continue;let u=1.6+t()*1.4;n.add(s,0,c,1,.8+t()*.5,1),r.add(s,2.4+u*.8,c,u,u*1.15,u,t()*Math.PI,i[Math.floor(t()*i.length)])}e.add(n.build()),e.add(r.build())}var ud=1.4;function dd(n,r){let o=new Map,{minX:s,maxX:c,minZ:l,maxZ:u}=t,d=c-s,f=u-l;n.add(X(d,e,f,Y(J.concrete),0,e/2,0)),n.add(Cu(d,f,Y(J.floor),0,e+.002,0)),fd(n,r),pd(n),md(n);for(let e of[...i,...a])o.set(e.id,hd(n,e));return gd(n),o}function fd(t,n){let r=Y(J.lineYellow),i=e+.004;for(let a of o){let o=a.maxX-a.minX,s=a.maxZ-a.minZ,c=(a.minX+a.maxX)/2,l=(a.minZ+a.maxZ)/2;t.add(Cu(o,s,Y(vu(J.floor,a.color,.22)),c,i,l)),t.add(Cu(o,.12,r,c,i+.002,a.minZ)),t.add(Cu(o,.12,r,c,i+.002,a.maxZ)),t.add(Cu(.12,s,r,a.minX,i+.002,l)),t.add(Cu(.12,s,r,a.maxX,i+.002,l));let u=a.id===`preparacion`?`PREPARACIÓN`:a.name.toUpperCase();t.add(Du(u,c,i,-19.7,Math.min(o-1.2,10),vu(a.color,`#000000`,.25))),n.addRect(`zona-${a.id}`,O[a.id],a.minX,a.maxX,e,e+.15,a.minZ,a.maxZ)}}function pd(n){let r=Y(J.laneForklift),i=Y(J.laneWalk),a=e+.009,{crossZ:o,longX:s,width:c}=d,l={minX:t.minX+.5,maxX:t.maxX-.5};for(let e of[-o,o])n.add(Cu(l.maxX-l.minX,c,r,0,a,e));for(let e of s)n.add(Cu(c,o*2,r,e,a,0));n.add(Cu(l.maxX-l.minX,c,i,0,a,t.maxZ-1.2))}function md(r){let{minX:o,maxX:s,minZ:c,maxZ:l,wallHeight:u,wallThickness:d}=t,p=e+u,m=Y(J.wallInside),h=Y(J.wallOutside),g=Y(J.wallCap),_=Y(J.wallBase),v=e=>{let t=[m,m,g,m,m,m];return t[e]=h,t},y=(e,t,n,i,a,o,s)=>{let c=i-n;if(c<=.01)return;let l=new zi(e===`x`?new ba(c,o-a,d):new ba(d,o-a,c),v(s)),u=(n+i)/2;e===`x`?l.position.set(u,(a+o)/2,t):l.position.set(t,(a+o)/2,u),l.castShadow=!0,l.receiveShadow=!0,r.add(l);let f=e===`x`?X(c,.5,.06,_):X(.06,.5,c,_),p=(s===0||s===4?1:-1)*(d/2+.03);e===`x`?f.position.set(u,.3,t+p):f.position.set(t+p,.3,u),f.castShadow=!1,r.add(f)},b=(t,n,r,i,a,o)=>{let s=r;for(let r of[...o].sort((e,t)=>e.c-t.c))y(t,n,s,r.c-r.w/2,0,p,a),y(t,n,r.c-r.w/2,r.c+r.w/2,e+r.h,p,a),s=r.c+r.w/2;y(t,n,s,i,0,p,a)},x=e=>({c:e.z,w:n,h:f});b(`z`,o-d/2,c-d,l+d,1,i.map(x)),b(`z`,s+d/2,c-d,l+d,0,a.map(x)),b(`x`,c-d/2,o,s,5,[]),b(`x`,l+d/2,o,s,4,[{c:24,w:ud,h:2.4}])}function hd(r,i){let a=t.wallThickness,o=i.facing,s=i.x+o*a,c=Y(J.rubber),l=new fr;for(let t of[-1,1])l.add(X(.35,f+.3,.35,c,s+o*.17,e+(f+.3)/2-.15,i.z+t*(n/2+.05)));l.add(X(.35,.4,n+.45,c,s+o*.17,e+f+.15,i.z));for(let t of[-1,1])l.add(X(.25,.45,.35,c,s+o*.12,e-.3,i.z+t*1));l.add(X(2,.05,n-.6,Y(J.steel),i.x-o*1,e+.025,i.z));for(let t of[-1,1])l.add(Cu(2,.2,Y(J.lineYellow),i.x-o*1,e+.012,i.z+t*(n/2-.15)));let u=new zi(new Sa(.28,.28,n,10),Y(J.door));u.rotation.x=Math.PI/2,u.position.set(i.x-o*.4,e+f-.2,i.z),l.add(u);let d=new fr;d.add(X(.08,f,n,Y(J.door),0,-f/2,0));for(let e=1;e<5;e++)d.add(X(.1,.04,n-.1,Y(`#3a434c`),o*.01,-(f*e)/5,0));d.traverse(e=>e.castShadow=!1),Nu(d),d.position.set(i.x,e+f,i.z),r.add(d);for(let t of[1,-1]){let n=Eu(i.id,{width:1,color:`#ffffff`,background:gu.red,padding:30}),r=t===1?s+o*.36:i.x-o*.02;n.position.set(r,e+f+.7,i.z),n.rotation.y=(t===1?o:-o)*(Math.PI/2),l.add(n)}return l.add(Du(i.id,i.x-o*3,e+.01,i.z,1.4,vu(J.floor,`#000000`,.45))),r.add(l),d}function gd(n){let r=t.maxZ+t.wallThickness,i=Y(J.concrete);for(let t=0;t<4;t++){let a=e*(4-t)/4;n.add(X(2,a,.35,i,24,a/2,r+.175+t*.35))}for(let t of[-1,1])n.add(X(.05,.05,1.4,Y(J.lineYellow),24+t*1,e+.6,r+1.4/2))}function _d(e){let t=Math.floor(e/60),n=Math.floor(t/60)%24,r=t%60;return`${String(n).padStart(2,`0`)}:${String(r).padStart(2,`0`)}`}var vd=e=>`${Math.round(e/60)} min`,yd=e=>`${Math.round(e*100)} %`,bd=(e,t=0)=>e*3600+t*60,xd=e=>e*60,Sd=[{name:`Bebidas`,share:.25,initialPallets:12,leadTime:[2.5,3.5]},{name:`Agua mineral`,share:.2,initialPallets:10,leadTime:[2.5,3.5]},{name:`Fideos y arroz`,share:.13,initialPallets:8,leadTime:[3,4]},{name:`Lácteos larga vida`,share:.12,initialPallets:7,leadTime:[3,4]},{name:`Limpieza`,share:.1,initialPallets:6,leadTime:[3,4]},{name:`Conservas`,share:.06,initialPallets:160,leadTime:[4,6]},{name:`Aceites`,share:.05,initialPallets:150,leadTime:[4,6]},{name:`Higiene personal`,share:.04,initialPallets:140,leadTime:[4,6]},{name:`Golosinas`,share:.03,initialPallets:130,leadTime:[4,6]},{name:`Alimento para mascotas`,share:.02,initialPallets:120,leadTime:[4,6]}],Cd={receivingDocks:4,shippingDocks:4,forklifts:6,pickers:5,slotting:`random`,reorderPoint:[12,10,9,7,6,5,5,4,4,4],orderQty:[12,12,10,10,8,6,6,6,6,6],appointments:0,express:!1,batchPicking:!1,replenishEarly:!1},wd={receivingDocks:[1,4],shippingDocks:[1,4],forklifts:[1,10],pickers:[1,5],reorderPoint:[0,40],orderQty:[1,40],appointments:[0,60]},Td={forkliftHour:1200,pickerHour:450,dockHour:350,truckWaitHour:900,lateOrder:2500,palletDay:40,expressPurchase:6e3},Ed={seed:18,shiftStart:bd(8),shiftEnd:bd(18),timeScale:60,unplannedPerHour:[1,1,.6,.5,.3,.5,.5,.4,.3,0],palletsPerTruck:[7,11],truckMaxPallets:12,reorderCheck:xd(1),expressFactor:.4,gateCheck:xd(2),dockSetup:xd(5),unloadPerPallet:xd(3),paperwork:xd(4),casesPerPallet:24,maxForklifts:10,forkliftSpeed:.25,forkliftApproachSpeed:.15,liftSpeed:.2,handleTime:15,forkliftTurn:6,ordersPerHour:[14,13,12,12,9,11,12,11,7,0],linesPerOrder:[1,3],casesPerLine:[6,16],orderSetup:xd(1),perCase:17,pickerSpeed:.14,wrapTime:90,replenishAt:16,replenishEarlyAt:30,batchMaxCases:60,batchSortPerCase:6,firstDeparture:bd(8,40),departureEvery:xd(40),lastDeparture:bd(17,20),loadWindow:xd(45),orderLeadTime:xd(60),truckCapacity:12,loadPerPallet:xd(2),maxDepartureWait:xd(20),fleet:7,routeTime:[xd(100),xd(150)],onTimeTolerance:xd(5),truckSpeed:.25,roadSpeed:.45,reverseSpeed:.1},Z=(e,t)=>({x:e,z:t}),Dd=(e,t)=>Math.hypot(t.x-e.x,t.z-e.z),Od=(e,t,n)=>({x:e.x+(t.x-e.x)*n,z:e.z+(t.z-e.z)*n}),kd=(e,t)=>Math.atan2(-t,e);function Ad(e,t){let n=(t-e)%(Math.PI*2);return n>Math.PI&&(n-=Math.PI*2),n<=-Math.PI&&(n+=Math.PI*2),n}function jd(e,t,n,r){let i=[];for(let a=1;a<=r;a++){let o=a/r,s=1-o;i.push({x:s*s*e.x+2*s*o*t.x+o*o*n.x,z:s*s*e.z+2*s*o*t.z+o*o*n.z})}return i}function Md(e,t){let n=[e[0]];for(let r=1;r<e.length-1;r++){let[i,a,o]=[e[r-1],e[r],e[r+1]],s=Math.min(t,Dd(i,a)/2,Dd(a,o)/2);if(s<.05){n.push(a);continue}let c=Od(a,i,s/Dd(i,a)),l=Od(a,o,s/Dd(a,o));n.push(c,...jd(c,a,l,Math.max(4,Math.ceil(s*1.2))))}return n.push(e[e.length-1]),n}var Nd=(e,t,n={})=>({kind:`path`,points:e,speed:t,...n}),Pd=e=>({kind:`wait`,time:e}),Fd=e=>({kind:`do`,fn:e}),Id=e=>({kind:`until`,ready:e}),Ld=class{x;z;heading;turnRate;liftSpeed;lift=0;queue=[];next=1;elapsed=0;constructor(e,t,n,r=Math.PI/2/8,i=.15){this.x=e,this.z=t,this.heading=n,this.turnRate=r,this.liftSpeed=i}get idle(){return this.queue.length===0}then(...e){return this.queue.push(...e),this}update(e){for(let t=0;this.queue.length&&t<200;t++){let t=this.step(this.queue[0],e);if(t<0)return;this.queue.shift(),this.next=1,this.elapsed=0,e=t}}step(e,t){switch(e.kind){case`do`:return e.fn(),t;case`until`:return e.ready()?t:-1;case`wait`:return this.elapsed+=t,this.elapsed>=e.time?this.elapsed-e.time:-1;case`lift`:{let n=e.to-this.lift,r=this.liftSpeed*t;return Math.abs(n)<=r?(this.lift=e.to,t-Math.abs(n)/this.liftSpeed):(this.lift+=Math.sign(n)*r,-1)}case`turn`:return this.turn(e.heading,t);case`path`:return this.follow(e,t)}}turn(e,t){let n=Ad(this.heading,e),r=this.turnRate*t;return Math.abs(n)<=r?(this.heading=e,t-Math.abs(n)/this.turnRate):(this.heading+=Math.sign(n)*r,-1)}follow(e,t){for(;this.next<e.points.length;){let n=e.points[this.next],r=n.x-this.x,i=n.z-this.z,a=Math.hypot(r,i);if(a<1e-4){this.next++;continue}let o=kd(r,i)+(e.reverse?Math.PI:0);if(e.pivot){if(Math.abs(Ad(this.heading,o))>.001&&(t=this.turn(o,t),t<0))return-1}else this.heading=o;let s=e.speed*t;if(s<a)return this.x+=r/a*s,this.z+=i/a*s,-1;this.x=n.x,this.z=n.z,t-=a/e.speed,this.next++}return t}},Rd=class{slots=[];version=0;count=0;byProduct;constructor(e){this.byProduct=Array(e).fill(0);let t=d.longX[1],{bays:n,bayWidth:r,levels:i,levelHeight:a,depth:o,flue:l}=s;c.forEach((e,s)=>{for(let c of[-1,1]){let u=e.z+c*(l/2+o/2);for(let o=0;o<n;o++)for(let n of[-.65,.65])for(let l=0;l<i;l++){let i=e.minX+(o+.5)*r+n,d=t-i+l*6;this.slots.push({index:this.slots.length,row:s,side:c,level:l,x:i,y:l*a,z:u,pallet:null,reserved:!1,reach:d})}}})}get capacity(){return this.slots.length}get occupied(){return this.count}occupiedInRow(e){return this.slots.filter(t=>t.row===e&&t.pallet).length}put(e,t){t.x=e.x,t.y=e.y,t.z=e.z,t.rotY=0,t.moving=!1,e.pallet=t,e.reserved=!1,this.count++,this.byProduct[t.product]++,this.version++}take(e){let t=e.pallet;return e.pallet=null,e.reserved=!1,this.count--,this.byProduct[t.product]--,this.version++,t}freeSlot(e,t){let n=this.slots.filter(e=>!e.pallet&&!e.reserved);if(!n.length)return null;if(!t)return n[Math.floor(e()*n.length)];n.sort((e,t)=>e.reach-t.reach);let r=t===`A`?0:t===`B`?.35:1;return n[Math.min(n.length-1,Math.floor(r*(n.length-1)))]}oldestSlot(e){let t=null;for(let n of this.slots){let r=n.pallet;r&&r.product===e&&!n.reserved&&(!t||r.receivedAt<t.pallet.receivedAt)&&(t=n)}return t}available(e){return this.slots.reduce((t,n)=>t+ +(n.pallet?.product===e&&!n.reserved),0)}static aisleFor(e){let t=d.crossZ;return e.side===-1?e.row===0?-t:u[e.row-1]:e.row===c.length-1?t:u[e.row]}static rowName(e){return c[e.row].id}},zd=.06,Bd=1.6,Vd=p.faceX+1.1,Hd=()=>p.stationsZ.flatMap(e=>p.faceDZ.map(t=>Z(p.faceX,e+t))),Ud=e=>e.pallet?.cases??0;function Wd(e,t){return[e,Z(Vd,e.z),Z(Vd,t.z),t]}var Gd=class{index;z;speed;outputPos;mover;output=null;outputOrders=[];outputClaimed=!1;active=!0;state=`idle`;orders=[];stops=[];stop=null;timer=0;busy=0;activeTime=0;ordersDone=0;atTable;atOutput;constructor(e,t,n){this.index=e,this.z=t,this.speed=n,this.outputPos=Z(p.outputX,t+p.outputDZ),this.atTable=Z(p.tableX-.95,t),this.atOutput=Z(p.outputX-1.3,t+2.2),this.mover=new Ld(this.atTable.x,this.atTable.z,0)}get name(){return`puesto ${this.index+1}`}get visible(){return this.state!==`off`}get working(){return this.state!==`off`&&this.state!==`idle`&&this.state!==`blocked`}update(e,t){switch(this.active&&(this.activeTime+=e),this.working&&(this.busy+=e),this.mover.update(e),this.state){case`off`:this.active&&(this.state=`idle`);return;case`idle`:{if(!this.active){this.state=`off`;return}if(this.output||!this.mover.idle)return;let e=t.takeOrder();if(!e)return;let n=t.decisions.batchPicking?t.takeCompanion(e):null;this.start(n?[e,n]:[e],t);return}case`picking`:case`blocked`:{let n=this.stop,r=t.faces[n.product];if(Ud(r)===0){this.state=`blocked`,t.stats.pickerBlocked+=e;return}for(this.state=`picking`,this.timer-=e;this.timer<=0&&n.picked<n.cases&&Ud(r)>0;){t.takeCase(r),n.picked++;let e=n.lines.find(e=>e.picked<e.cases);e.picked++,this.timer+=t.params.perCase}n.picked>=n.cases&&this.walkBack(t);return}default:return}}start(e,t){for(let t of e)t.state=`picking`;this.orders=e,e.length>1&&t.stats.batchedPallets++;let n=new Map;for(let t of e)for(let e of t.lines){if(e.picked>=e.cases)continue;let t=n.get(e.product)??{product:e.product,cases:0,picked:0,lines:[]};t.cases+=e.cases-e.picked,t.lines.push(e),n.set(e.product,t)}this.stops=[...n.values()],this.output=t.addFloorPallet(this.outputPos,Math.PI/2,{product:-1,height:0,cases:0}),this.output.orders=e,this.outputOrders=e,this.state=`setup`,this.mover.then(Nd(Wd(this.here,this.atOutput),this.speed),Pd(t.params.orderSetup),Fd(()=>this.nextStop(t)))}get here(){return Z(this.mover.x,this.mover.z)}nextStop(e){let t=this.stops.find(e=>e.picked<e.cases);if(!t){let t=this.orders.length>1?e.params.batchSortPerCase*this.stops.reduce((e,t)=>e+t.cases,0):0;e.stats.batchSortTime+=t,this.state=t>0?`sorting`:`wrapping`,this.mover.then(Pd(t),Fd(()=>this.state=`wrapping`),Pd(e.params.wrapTime),Fd(()=>this.finish(e)));return}this.stop=t,this.state=`toFace`;let n=e.faces[t.product];this.mover.then(Nd(Wd(this.here,n.pickAt),this.speed),Fd(()=>{this.mover.heading=Math.PI,this.state=`picking`,this.timer=e.params.perCase}))}walkBack(e){let t=this.stop;this.state=`back`,this.mover.then(Nd(Wd(this.here,this.atOutput),this.speed),Fd(()=>{let n=this.output;n.cases+=t.cases,n.height=Math.min(Bd,n.cases*zd),this.mover.heading=kd(this.outputPos.x-this.atOutput.x,this.outputPos.z-this.atOutput.z),e.floorVersion++,this.stop=null,this.nextStop(e)}))}finish(e){this.output.shade=-1;for(let e of this.orders)e.state=`ready`;this.ordersDone+=this.orders.length,this.orders=[],this.stops=[],this.state=`idle`,e.floorVersion++,this.mover.then(Nd(Wd(this.here,this.atTable),this.speed),Fd(()=>this.mover.heading=0))}get orderNames(){let e=this.orders.map(e=>`#${e.id}`);return e.length>1?`Pedidos ${e.join(` y `)}`:`Pedido ${e[0]}`}status(e){switch(this.state){case`off`:return`Fuera de servicio`;case`idle`:return this.active?this.output?`Esperando que retiren ${this.outputOrders.length>1?`los pedidos`:`el pedido`} ${this.outputOrders.map(e=>`#${e.id}`).join(` y `)}`:`Sin pedidos para preparar`:`Terminó su turno`;case`setup`:return`${this.orderNames}: leyendo la hoja de preparación`;case`toFace`:return`${this.orderNames}: va a buscar ${e(this.stop.product)}`;case`picking`:return`${this.orderNames}: tomando ${e(this.stop.product)} (${this.stop.picked} de ${this.stop.cases} cajas)`;case`blocked`:return`${this.orderNames}: espera que repongan ${e(this.stop.product)}`;case`back`:return`${this.orderNames}: vuelve con el carro`;case`sorting`:return`${this.orderNames}: separando y etiquetando las cajas de cada pedido`;case`wrapping`:return`${this.orderNames}: envolviendo con film`}}get waitingFor(){return this.state===`blocked`?this.stop.product:null}},Kd=null;function qd(){if(Kd)return Kd;let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,`rgba(0,0,0,0.55)`),n.addColorStop(.6,`rgba(0,0,0,0.3)`),n.addColorStop(1,`rgba(0,0,0,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),Kd=new Di({map:new ga(e),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}),Kd}function Jd(e){e.traverse(e=>{e.isMesh&&(e.castShadow=!1)})}var Yd=new dr,Xd=class{group=new fr;meshes;constructor(e,t){e.updateMatrixWorld(!0),this.meshes=e.children.filter(e=>e.isMesh&&!Array.isArray(e.material)).map(e=>{let n=new Zi(e.geometry.clone().applyMatrix4(e.matrix),e.material,t);return n.castShadow=!1,n.receiveShadow=!0,n.frustumCulled=!1,n.count=0,n}),this.group.add(...this.meshes)}update(e){let t=0;for(let n of e)if(n.visible){Yd.position.copy(n.position),Yd.rotation.set(0,n.rotation.y,0),Yd.scale.set(1,1,1),Yd.updateMatrix();for(let e of this.meshes)e.setMatrixAt(t,Yd.matrix);t++}for(let e of this.meshes)e.count=t,e.instanceMatrix.needsUpdate=!0}},Zd=class{mesh;constructor(e){let t=new Aa(1,1).rotateX(-Math.PI/2);this.mesh=new Zi(t,qd(),e),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,this.mesh.count=0}update(e){let t=0;for(let n of e){if(!n.object.visible||t>=this.mesh.instanceMatrix.count)continue;let e=n.object,r=e.rotation.y,i=n.dx??0;Yd.position.set(e.position.x+Math.cos(r)*i,e.position.y+(n.y??.04),e.position.z-Math.sin(r)*i),Yd.rotation.set(0,r,0),Yd.scale.set(n.length,1,n.width),Yd.updateMatrix(),this.mesh.setMatrixAt(t++,Yd.matrix)}this.mesh.count=t,this.mesh.instanceMatrix.needsUpdate=!0}},Qd=Gu.map(e=>new G(e)),$d=new G(J.film),ef=e=>e===-1?$d:Qd[e]??Qd[0],tf=class{group=new fr;bases;loads;tmp=new dr;constructor(e,t){this.bases=new Zi(Wu(),Y(J.pallet),e),this.loads=new Zi(Lu,Y(`#ffffff`),e);for(let e of[this.bases,this.loads])e.castShadow=t,e.receiveShadow=!0,e.frustumCulled=!1,e.count=0,this.group.add(e);this.loads.setColorAt(0,$d)}update(t){let n=0,r=0,i=this.tmp;for(let a of t){if(n>=this.bases.instanceMatrix.count)break;i.position.set(a.x,e+a.y,a.z),i.rotation.set(0,a.rotY,0),i.scale.set(1,1,1),i.updateMatrix(),this.bases.setMatrixAt(n++,i.matrix),a.height>.01&&(i.position.y+=Hu,i.scale.set(.96,a.height,1.14),i.updateMatrix(),this.loads.setMatrixAt(r,i.matrix),this.loads.setColorAt(r++,ef(a.shade)))}this.bases.count=n,this.loads.count=r,this.bases.instanceMatrix.needsUpdate=!0,this.loads.instanceMatrix.needsUpdate=!0,this.loads.instanceColor&&(this.loads.instanceColor.needsUpdate=!0)}},nf=w/2,rf=new ba(.6,1.8,.6).translate(0,.9,0),af=class{world;sim;registry;hooks;root=new fr;trucks=new Map;forklifts=[];pickers=[];faceItems=[];crews=[];rackPallets=new tf(c.length*l,!0);floorPallets=new tf(256,!0);movingPallets=new tf(32,!1);rackVersion=-1;floorVersion=-1;doorOpen=new Map;barrierOpen;people=new Xd(Bu(),32);personProxies=[];blobs=new Zd(96);fixedBlobs=[];truckBlobs=new Map;constructor(t,n,r,i){this.world=t,this.sim=n,this.registry=r,this.hooks=i,this.root.add(this.rackPallets.group,this.floorPallets.group,this.movingPallets.group,this.people.group,this.blobs.mesh),t.scene.add(this.root),this.barrierOpen=i.barriers.map(()=>0),n.forklifts.forEach(e=>{let t=zu();Jd(t.root),this.fixedBlobs.push({object:t.root,length:3,width:1.6,y:.03}),this.root.add(t.root);let n=r.addMoving(`montacargas-${e.id}`,{...ee.montacargas,title:`Montacargas ${e.id}`},t.root,()=>[{label:`Estado`,value:e.status},{label:`Tareas hechas hoy`,value:String(e.tasksDone)},{label:`Tiempo ocupado`,value:e.activeTime>0?yd(e.busy/e.activeTime):`—`},{label:`Costo por hora en servicio`,value:`$ ${Td.forkliftHour.toLocaleString(`es-UY`)}`}]);this.forklifts.push({model:t.root,of:e,item:n,parts:t})}),n.stations.forEach(e=>{let t=this.person(),n=r.addMoving(`preparador-${e.index+1}`,{...ee.preparador,title:`Preparador del puesto ${e.index+1}`},t,()=>this.stationFacts(e));this.pickers.push({model:t,of:e,item:n})});for(let t of n.faces){let i=n.products[t.product],{x:a,z:o}=t.pos,s=r.addRect(`picking-${t.product}`,ne(i.def.name,i.abc),a-.65,a+.65,e,e+1.6,o-.55,o+.55);s.live=()=>[{label:`Cajas en el lugar`,value:String(Ud(t))},{label:`Pallets en estanterías`,value:String(n.storage.byProduct[t.product])},{label:`Reposición`,value:t.claimed?`Un montacargas la está trayendo`:Ud(t)<=n.replenishAt?`Pedida, esperando montacargas`:`No hace falta todavía`}],this.faceItems.push(s)}for(let e of n.docks)this.crews.push({model:this.person(),crew:e.crew});this.attachLiveFacts(),this.sync(0)}dispose(){for(let e of[...this.trucks.values(),...this.forklifts,...this.pickers])this.registry.remove(e.item);for(let e of this.faceItems)this.registry.remove(e);for(let e of this.registry.items)delete e.live;this.root.removeFromParent()}sync(e){this.syncTrucks(),this.syncForklifts(),this.syncPeople(),this.syncPallets(),this.syncDoors(e),this.people.update(this.personProxies),this.blobs.update([...this.fixedBlobs,...this.truckBlobs.values()])}person(){let e=new fr,t=new zi(rf);return t.visible=!1,e.add(t),this.root.add(e),this.personProxies.push(e),this.fixedBlobs.push({object:e,length:.9,width:.9,y:.03}),e}syncTrucks(){for(let e of this.sim.trucks)this.trucks.has(e)||this.addTruck(e);for(let[e,t]of this.trucks){if(!this.sim.trucks.includes(e)){this.registry.remove(t.item),t.model.removeFromParent(),this.trucks.delete(e),this.truckBlobs.delete(e);continue}let{x:n,z:r,heading:i}=e.mover;t.model.position.set(n-Math.cos(i)*nf,0,r+Math.sin(i)*nf),t.model.rotation.y=i}}addTruck(e){let t=Ru(e.fleet?{cabColor:J.cabFleet}:{});Jd(t),this.truckBlobs.set(e,{object:t,length:w+1.2,width:3,dx:nf,y:.06}),this.root.add(t);let n={...re[e.fleet?`flota`:`proveedor`],title:`Camión ${e.id}`},r=this.registry.addMoving(`camion-${e.id}`,n,t,()=>this.truckFacts(e));this.trucks.set(e,{model:t,of:e,item:r})}syncForklifts(){for(let{parts:t,of:n}of this.forklifts){let r=n.mover;t.root.position.set(r.x,e,r.z),t.root.rotation.y=r.heading,t.lift.position.y=r.lift;let i=n.carrying;t.cargo.visible=!!i,i&&(t.load.scale.y=Math.max(.01,i.height),t.load.material.color.copy(ef(i.shade)))}}syncPeople(){for(let t of this.pickers){let n=t.of.mover;t.model.visible=t.of.visible,t.model.position.set(n.x,e,n.z),t.model.rotation.y=n.heading}for(let{model:t,crew:n}of this.crews)t.visible=n.visible,n.visible&&(t.position.set(n.x,e,n.z),t.rotation.y=n.heading)}syncPallets(){let{storage:e}=this.sim,t=!1;e.version!==this.rackVersion&&(this.rackVersion=e.version,this.rackPallets.update(e.slots.filter(e=>e.pallet).map(e=>e.pallet)),t=!0);let n=[...this.sim.floor];this.sim.floorVersion!==this.floorVersion&&(this.floorVersion=this.sim.floorVersion,this.floorPallets.update(n.filter(e=>!e.moving)),t=!0),this.movingPallets.update(n.filter(e=>e.moving)),t&&this.world.invalidateShadows()}syncDoors(e){let t=(t,n,r)=>t+Math.sign(n-t)*Math.min(Math.abs(n-t),r*e);for(let n of this.sim.docks){let r=this.hooks.doors.get(n.dock.id);if(!r)continue;let i=+!!n.docked,a=e>0?t(this.doorOpen.get(n.dock.id)??i,i,1.5):i;this.doorOpen.set(n.dock.id,a),r.scale.y=1-.94*a}this.hooks.barriers.forEach((n,r)=>{let i=v.x+n.side*1.8,a=this.sim.trucks.some(e=>e.state!==`gate`&&Math.abs(e.mover.x-i)<3&&Math.abs(e.mover.z-_.maxZ)<nf+6);this.barrierOpen[r]=e>0?t(this.barrierOpen[r],+!!a,2.5):+!!a,n.arm.rotation.z=-n.side*this.barrierOpen[r]*1.35})}truckFacts(e){let t=[{label:`Estado`,value:this.sim.truckStatus(e)}];if(e.fleet){let n=e.departure;t.push({label:`Salida asignada`,value:n?`${_d(n.time)} (${n.orders.length} pedidos)`:`Ninguna por ahora`})}else t.push({label:`Carga`,value:`${e.pallets} pallets de ${this.sim.products[e.product].def.name}`},{label:`Origen`,value:e.planned?`Pedido del hub al proveedor`:`Llegó sin aviso`}),e.state!==`road`&&t.push({label:`Llegó a portería`,value:_d(e.arrivedAt)});return t}stationFacts(e){return[{label:`Estado`,value:this.sim.stationStatus(e)},{label:`Pedidos preparados hoy`,value:String(e.ordersDone)},{label:`Tiempo trabajando`,value:e.activeTime>0?yd(e.busy/e.activeTime):`—`},{label:`Costo por hora`,value:`$ ${Td.pickerHour.toLocaleString(`es-UY`)}`}]}attachLiveFacts(){let e=this.sim,t=(e,t)=>{let n=this.registry.get(e);n&&(n.live=t)};for(let n of e.docks)t(`muelle-${n.dock.id}`,()=>{let t=[{label:`Estado`,value:e.dockStatus(n)},{label:`Pallets en el piso`,value:`${n.slots.filter(Boolean).length} de ${n.slots.length}`}];if(n.dock.kind===`despacho`){let r=e.currentDeparture(n);t.push({label:`Próxima salida`,value:r?`${_d(r.time)} · ${r.orders.length} pedidos`:`No hay más hoy`})}return t});c.forEach((n,r)=>{t(`estanteria-${n.id}`,()=>{let t=e.storage.occupiedInRow(r);return[{label:`Niveles`,value:String(s.levels)},{label:`Posiciones de pallet`,value:String(l)},{label:`Ocupadas`,value:`${t} (${yd(t/l)})`}]})}),t(`zona-almacen`,()=>[{label:`Pallets guardados`,value:`${e.storage.occupied} de ${e.storage.capacity}`},{label:`Ocupación`,value:yd(e.storage.occupied/e.storage.capacity)}]),t(`zona-recepcion`,()=>[{label:`Pallets esperando ser guardados`,value:String(e.receiving.reduce((e,t)=>e+t.slots.filter(Boolean).length,0))},{label:`Pallets recibidos hoy`,value:String(e.stats.palletsReceived)}]),t(`espera-recepcion`,()=>[{label:`Camiones esperando`,value:String(e.queueLength)},{label:`Espera promedio hoy`,value:vd(e.averageWait)},{label:`Cola más larga hoy`,value:String(e.stats.queueMax)}]),t(`espera-despacho`,()=>[{label:`Camiones estacionados`,value:String(e.trucks.filter(e=>e.fleet&&(e.state===`parked`||e.state===`assigned`)).length)},{label:`Camiones en reparto`,value:String(e.trucksAway)}]),e.stations.forEach(e=>t(`puesto-${e.index+1}`,()=>this.stationFacts(e)))}},of=gu.redLight,sf=6,cf=1,lf=class{scene;group=new fr;constructor(e,t,n){this.scene=e;let r=new ba(1,1,1),i=new zi(r,new Di({color:of,transparent:!0,opacity:t,depthWrite:!1})),a=new ma(new Oa(r),new na({color:of,transparent:!0,opacity:n}));this.group.add(i,a),this.group.visible=!1,this.group.renderOrder=10,e.add(this.group)}show(e){this.group.visible=!!e,e&&((e.object??this.scene).add(this.group),e.box.getCenter(this.group.position),e.box.getSize(this.group.scale))}},uf=class{world;raycaster=new Go;pointer=new V;hitboxes=new Map;material=new Di({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1});unit=new ba(1,1,1);hover;selection;hovered=null;selected=null;down=null;pointerDirty=!1;pointerInside=!1;onSelect=()=>{};onFocus=()=>{};constructor(e,t){this.world=e,this.raycaster.layers.set(cf),this.hover=new lf(e.scene,.14,.8),this.selection=new lf(e.scene,.28,1);for(let e of t.items)this.addHitbox(e);t.onAdd=e=>this.addHitbox(e),t.onRemove=e=>this.removeHitbox(e);let n=e.renderer.domElement;n.addEventListener(`pointermove`,e=>{this.setPointer(e),this.pointerDirty=!0,this.pointerInside=!0}),n.addEventListener(`pointerleave`,()=>{this.pointerInside=!1,this.setHovered(null)}),n.addEventListener(`pointerdown`,e=>{e.button===0&&(this.down={x:e.clientX,y:e.clientY})}),n.addEventListener(`pointerup`,e=>{if(e.button!==0||!this.down)return;let t=Math.hypot(e.clientX-this.down.x,e.clientY-this.down.y);this.down=null,!(t>sf)&&(this.setPointer(e),this.select(this.pick()))}),n.addEventListener(`dblclick`,e=>{this.setPointer(e);let t=this.pick();t&&this.onFocus(t)}),e.onUpdate(()=>{this.pointerInside&&!this.down&&(this.pointerDirty||this.hasMovingItems())&&(this.pointerDirty=!1,this.setHovered(this.pick()))})}get current(){return this.selected}select(e){this.selected=e,this.selection.show(e),e&&e===this.hovered&&this.hover.show(null),this.onSelect(e)}selectById(e){let t=[...this.hitboxes.keys()].find(t=>t.id===e);t&&this.select(t)}addHitbox(e){let t=new zi(this.unit,this.material);t.layers.set(cf),e.box.getCenter(t.position),e.box.getSize(t.scale),t.userData.item=e,e.object&&e.object.add(t),t.updateMatrixWorld(),this.hitboxes.set(e,t)}removeHitbox(e){this.hitboxes.get(e)?.removeFromParent(),this.hitboxes.delete(e),this.hovered===e&&this.setHovered(null),this.selected===e&&this.select(null)}hasMovingItems(){for(let e of this.hitboxes.keys())if(e.object)return!0;return!1}setHovered(e){e!==this.hovered&&(this.hovered=e,this.hover.show(e&&e!==this.selected?e:null),this.world.renderer.domElement.style.cursor=e?`pointer`:``)}setPointer(e){let t=this.world.renderer.domElement.getBoundingClientRect();this.pointer.set((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1)}pick(){this.raycaster.setFromCamera(this.pointer,this.world.camera);let e=this.raycaster.intersectObjects([...this.hitboxes.values()],!1)[0];return e?e.object.userData.item:null}},df=class{items=[];onAdd=()=>{};onRemove=()=>{};add(e,t,n){let r={id:e,info:t,box:n};return this.items.push(r),this.onAdd(r),r}addObject(e,t,n,r=.25){return n.updateMatrixWorld(!0),this.add(e,t,new Ir().setFromObject(n).expandByScalar(r))}addMoving(e,t,n,r,i=.2){let a={p:n.position.clone(),r:n.rotation.clone(),parent:n.parent};n.removeFromParent(),n.position.set(0,0,0),n.rotation.set(0,0,0),n.updateMatrixWorld(!0);let o=new Ir().setFromObject(n).expandByScalar(i);n.position.copy(a.p),n.rotation.copy(a.r),a.parent?.add(n);let s={id:e,info:t,box:o,object:n,live:r};return this.items.push(s),this.onAdd(s),s}addRect(e,t,n,r,i,a,o,s){return this.add(e,t,new Ir(new H(n,i,o),new H(r,a,s)))}get(e){return this.items.find(t=>t.id===e)}remove(e){let t=this.items.indexOf(e);t<0||(this.items.splice(t,1),this.onRemove(e))}};function ff(e){return e.object?(e.object.updateMatrixWorld(!0),e.box.clone().applyMatrix4(e.object.matrixWorld)):e.box}var pf=(e,t,n)=>new H(e,t,n),mf=[{id:`general`,name:`Vista general`,color:gu.red,position:pf(84,104,112),target:pf(11,0,7)},{id:`recepcion`,name:`Recepción`,color:`#2e86de`,position:pf(-6,40,40),target:pf(-30,1,0)},{id:`almacen`,name:`Almacén`,color:`#8e6fd8`,position:pf(24,46,46),target:pf(-3,2,0)},{id:`preparacion`,name:`Preparación de pedidos`,color:`#f39c12`,position:pf(40,26,28),target:pf(20,1,0)},{id:`despacho`,name:`Despacho`,color:`#27ae60`,position:pf(62,30,34),target:pf(33,1,0)},{id:`patio`,name:`Patio y playas de espera`,color:`#2f7fc1`,position:pf(30,95,60),target:pf(0,0,-22)},{id:`acceso`,name:`Portería y oficinas`,color:`#9aa3a8`,position:pf(62,48,104),target:pf(16,0,48)}],hf=mf[0];function gf(e,t,n){let r=e.getCenter(new H),i=e.getSize(new H).length(),a=t.position.clone().sub(n).normalize(),o=hn.clamp(i*2.2,14,160);return{position:r.clone().addScaledVector(a,o),target:r}}var _f={type:`change`},vf={type:`start`},yf={type:`end`},bf=new Ei,xf=new yi,Sf=Math.cos(70*hn.DEG2RAD),Cf=new H,wf=2*Math.PI,Tf={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ef=1e-6,Df=class extends Xo{constructor(e,t=null){super(e,t),this.state=Tf.NONE,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:oe.ROTATE,MIDDLE:oe.DOLLY,RIGHT:oe.PAN},this.touches={ONE:se.ROTATE,TWO:se.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new gn,this._lastTargetPosition=new H,this._quat=new gn().setFromUnitVectors(e.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Yo,this._sphericalDelta=new Yo,this._scale=1,this._panOffset=new H,this._rotateStart=new V,this._rotateEnd=new V,this._rotateDelta=new V,this._panStart=new V,this._panEnd=new V,this._panDelta=new V,this._dollyStart=new V,this._dollyEnd=new V,this._dollyDelta=new V,this._dollyDirection=new H,this._mouse=new V,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=kf.bind(this),this._onPointerDown=Of.bind(this),this._onPointerUp=Af.bind(this),this._onContextMenu=Lf.bind(this),this._onMouseWheel=Nf.bind(this),this._onKeyDown=Pf.bind(this),this._onTouchStart=Ff.bind(this),this._onTouchMove=If.bind(this),this._onMouseDown=jf.bind(this),this._onMouseMove=Mf.bind(this),this._interceptControlDown=Rf.bind(this),this._interceptControlUp=zf.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.state=Tf.NONE,this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),e.removeEventListener(`keyup`,this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction=``,this.domElement.style.cursor=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(_f),this.update(),this.state=Tf.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Cf.copy(t).sub(this.target),Cf.applyQuaternion(this._quat),this._spherical.setFromVector3(Cf),this.autoRotate&&this.state===Tf.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=wf:n>Math.PI&&(n-=wf),r<-Math.PI?r+=wf:r>Math.PI&&(r-=wf),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(Cf.setFromSpherical(this._spherical),Cf.applyQuaternion(this._quatInverse),t.copy(this.target).add(Cf),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=Cf.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new H(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new H(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=Cf.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(bf.origin.copy(this.object.position),bf.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(bf.direction))<Sf?this.object.lookAt(this.target):(xf.setFromNormalAndCoplanarPoint(this.object.up,this.target),bf.intersectPlane(xf,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>Ef||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ef||this._lastTargetPosition.distanceToSquared(this.target)>Ef?(this.dispatchEvent(_f),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?wf/60/60*this.autoRotateSpeed:wf/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Cf.setFromMatrixColumn(t,0),Cf.multiplyScalar(-e),this._panOffset.add(Cf)}_panUp(e,t){this.screenSpacePanning===!0?Cf.setFromMatrixColumn(t,1):(Cf.setFromMatrixColumn(t,0),Cf.crossVectors(this.object.up,Cf)),Cf.multiplyScalar(e),this._panOffset.add(Cf)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Cf.copy(r).sub(this.target);let i=Cf.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(wf*this._rotateDelta.x/t.clientHeight),this._rotateUp(wf*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(wf*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-wf*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(wf*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-wf*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(wf*this._rotateDelta.x/t.clientHeight),this._rotateUp(wf*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new V,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Of(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function kf(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function Af(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(yf),this.state=Tf.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function jf(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case oe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=Tf.DOLLY;break;case oe.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Tf.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Tf.ROTATE}break;case oe.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Tf.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Tf.PAN}break;default:this.state=Tf.NONE}this.state!==Tf.NONE&&this.dispatchEvent(vf)}function Mf(e){switch(this.state){case Tf.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Tf.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Tf.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function Nf(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===Tf.NONE&&(e.preventDefault(),this.dispatchEvent(vf),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(yf))}function Pf(e){this.enabled!==!1&&this._handleKeyDown(e)}function Ff(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case se.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Tf.TOUCH_ROTATE;break;case se.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Tf.TOUCH_PAN;break;default:this.state=Tf.NONE}break;case 2:switch(this.touches.TWO){case se.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Tf.TOUCH_DOLLY_PAN;break;case se.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Tf.TOUCH_DOLLY_ROTATE;break;default:this.state=Tf.NONE}break;default:this.state=Tf.NONE}this.state!==Tf.NONE&&this.dispatchEvent(vf)}function If(e){switch(this._trackPointer(e),this.state){case Tf.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Tf.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Tf.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Tf.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Tf.NONE}}function Lf(e){this.enabled!==!1&&e.preventDefault()}function Rf(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function zf(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var Bf=new Ir(new H(-110,0,-80),new H(110,10,90)),Vf=class{container;scene=new xr;camera;renderer;controls;updaters=[];flight=null;clock=new Jo;shadowsDirty=!1;sinceShadows=0;constructor(e){this.container=e,this.renderer=new hu({antialias:!0,powerPreference:`high-performance`}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=2,this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1.05,e.appendChild(this.renderer.domElement),this.scene.background=new G(J.sky),this.scene.fog=new br(J.sky,260,560),this.camera=new wo(30,1,1,1200),this.controls=new Df(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.screenSpacePanning=!1,this.controls.minDistance=10,this.controls.maxDistance=340,this.controls.maxPolarAngle=1.25,this.controls.minPolarAngle=.15,this.controls.mouseButtons={LEFT:oe.PAN,MIDDLE:oe.DOLLY,RIGHT:oe.ROTATE},this.controls.touches={ONE:se.PAN,TWO:se.DOLLY_ROTATE},this.controls.addEventListener(`start`,()=>this.flight=null),this.addLights(),window.addEventListener(`resize`,()=>this.resize()),this.resize()}addLights(){this.scene.add(new fo(`#dcefff`,`#3a5a50`,1.25));let e=new Do(`#fff3e0`,2.4);e.position.set(70,130,55),e.castShadow=!0;let t=this.renderer.capabilities.maxTextureSize>=8192?4096:2048;e.shadow.mapSize.set(t,t);let n=e.shadow.camera;n.left=-115,n.right=115,n.top=95,n.bottom=-95,n.near=20,n.far=360,e.shadow.bias=-4e-4,e.shadow.normalBias=.04,this.scene.add(e)}bakeShadows(){this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!0}invalidateShadows(){this.shadowsDirty=!0}onUpdate(e){this.updaters.push(e)}setView(e){this.camera.position.copy(e.position),this.controls.target.copy(e.target),this.controls.update()}flyTo(e,t=1.2){this.flight={from:{position:this.camera.position.clone(),target:this.controls.target.clone()},to:e,t:0,duration:t}}start(){this.renderer.setAnimationLoop(()=>this.frame())}frame(){let e=Math.min(this.clock.getDelta(),.1);if(this.flight){let t=this.flight;t.t=Math.min(1,t.t+e/t.duration);let n=t.t<.5?4*t.t**3:1-(-2*t.t+2)**3/2;this.camera.position.lerpVectors(t.from.position,t.to.position,n),this.controls.target.lerpVectors(t.from.target,t.to.target,n),t.t>=1&&(this.flight=null)}this.controls.target.clamp(Bf.min,Bf.max),this.controls.update();for(let t of this.updaters)t(e);this.sinceShadows+=e,this.shadowsDirty&&this.sinceShadows>=.5&&(this.renderer.shadowMap.needsUpdate=!0,this.shadowsDirty=!1,this.sinceShadows=0),this.renderer.render(this.scene,this.camera)}resize(){let e=this.container.clientWidth,t=this.container.clientHeight;this.camera.aspect=e/Math.max(t,1),this.camera.fov=this.camera.aspect<1?45:30,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}},Hf=1.05,Uf=1800,Wf=180,Gf=class{d;mode=null;phase=`wait`;x;z;heading=0;pallet=null;truck=null;from;to;t=0;duration=1;slot=-1;lastWarn=-1/0;waitingSince=0;door;constructor(e){this.d=e,this.door=Z(e.dock.x-e.dock.facing*1,e.dock.z),this.x=this.door.x,this.z=this.door.z,this.from=this.to=this.door}get visible(){return this.mode!==null}get blocked(){return this.mode===`unload`&&this.phase===`wait`}unload(e,t){this.mode=`unload`,this.truck=e,this.walkTo(this.door,t.params.unloadPerPallet*.4)}load(e){this.mode=`load`,this.truck=e,this.phase=`wait`}stop(){this.mode=null,this.truck=null,this.phase=`wait`,this.x=this.door.x,this.z=this.door.z}update(e,t){if(!this.mode)return;let n=this.mode===`unload`,r=n?t.params.unloadPerPallet:t.params.loadPerPallet;if(this.phase===`walk`||this.phase===`push`){this.t+=e;let i=Math.min(1,this.t/this.duration),a=Od(this.from,this.to,i),o=this.to.x-this.from.x,s=this.to.z-this.from.z,c=Math.hypot(o,s)||1;if(Dd(this.from,this.to)>.01&&(this.heading=kd(o,s)),this.phase===`push`){let e=this.pallet;e.x=a.x,e.z=a.z,this.x=a.x-o/c*Hf,this.z=a.z-s/c*Hf}else this.x=a.x,this.z=a.z;if(i<1)return;if(this.phase===`walk`){n?(this.phase=`wait`,this.waitingSince=t.time):this.startLoadPush(r);return}this.finishPush(t)}else if(n){let n=this.truck;if(n.pallets===0){this.stop(),t.unloadDone(n);return}let i=this.d.slots.findIndex(e=>!e);if(i<0){t.stats.unloadBlocked+=e,t.time-this.waitingSince>=Wf&&t.time-this.lastWarn>Uf&&(this.lastWarn=t.time,t.emit(`Recepción ${this.d.dock.id} sin lugar en el piso: la descarga se frena hasta que los montacargas retiren pallets.`,`warn`));return}n.pallets--,this.slot=i,this.pallet=t.addFloorPallet(this.door,Math.PI/2,{product:n.product,height:xu(t.rand,.9,1.4),cases:t.params.casesPerPallet,moving:!0}),this.d.slots[i]=this.pallet,this.phase=`push`,this.from=this.door,this.to=this.d.positions[i],this.t=0,this.duration=r*.6}else{let e=-1;if(this.d.slots.forEach((t,n)=>{t&&!t.moving&&(e<0||t.x*this.d.dock.facing>this.d.slots[e].x*this.d.dock.facing)&&(e=n)}),e<0)return;this.slot=e,this.pallet=this.d.slots[e];let t=this.pallet,n=Z(t.x-this.d.dock.facing*Hf,t.z);this.walkTo(n,r*.4)}}walkTo(e,t){this.phase=`walk`,this.from=Z(this.x,this.z),this.to=e,this.t=0,this.duration=t}startLoadPush(e){let t=this.pallet;this.d.slots[this.slot]=null,t.moving=!0,this.phase=`push`,this.from=Z(t.x,t.z),this.to=this.door,this.t=0,this.duration=e*.6}finishPush(e){let t=this.pallet;this.pallet=null,this.mode===`unload`?(t.moving=!1,e.floorVersion++,e.stats.palletsReceived++,this.walkTo(this.door,e.params.unloadPerPallet*.4)):(e.removeFloorPallet(t),e.palletLoaded(this.truck,t),this.phase=`wait`)}},[Kf,qf,Jf]=d.longX,Yf=d.crossZ,Xf=[{axis:`h`,at:-Yf,from:Kf,to:Jf},{axis:`h`,at:Yf,from:Kf,to:Jf},...u.map(e=>({axis:`h`,at:e,from:Kf,to:qf})),...d.longX.map(e=>({axis:`v`,at:e,from:-Yf,to:Yf}))],Zf=.02,Qf=(e,t)=>t.axis===`h`?e.x:e.z,$f=(e,t)=>Math.abs((t.axis===`h`?e.z:e.x)-t.at)<Zf&&Qf(e,t)>t.from-Zf&&Qf(e,t)<t.to+Zf,ep=[];for(let e of Xf.filter(e=>e.axis===`h`))for(let t of Xf.filter(e=>e.axis===`v`)){let n=Z(t.at,e.at);$f(n,e)&&$f(n,t)&&ep.push(n)}function tp(e,t){if(Dd(e,t)<Zf)return[e,t];let n=[e,t,...ep],r=n.map(()=>[]);for(let e of Xf){let t=n.map((e,t)=>[t,e]).filter(([,t])=>$f(t,e));t.sort((t,n)=>Qf(t[1],e)-Qf(n[1],e));for(let e=1;e<t.length;e++)r[t[e-1][0]].push(t[e][0]),r[t[e][0]].push(t[e-1][0])}if(!r[0].length||!r[1].length)return[e,t];let i=n.map(()=>1/0),a=n.map(()=>-1),o=n.map(()=>!1);for(i[0]=0;;){let e=-1;for(let t=0;t<n.length;t++)!o[t]&&i[t]<1/0&&(e<0||i[t]<i[e])&&(e=t);if(e<0||e===1)break;o[e]=!0;for(let t of r[e]){let r=i[e]+Dd(n[e],n[t]);r<i[t]&&(i[t]=r,a[t]=e)}}if(a[1]<0)return[e,t];let s=[];for(let e=1;e>=0;e=a[e])s.unshift(n[e]);return s.filter((e,t)=>{if(t===0||t===s.length-1)return!0;let[n,r]=[s[t-1],s[t+1]];return!(Math.abs(n.x-e.x)<Zf&&Math.abs(r.x-e.x)<Zf||Math.abs(n.z-e.z)<Zf&&Math.abs(r.z-e.z)<Zf)})}var np=1.5,rp=.15,ip=.12;function ap(e,t,n,r=0){let i=Math.cos(t),a=-Math.sin(t);return{center:e,heading:t,access:n,level:r,origin:Z(e.x-i*np,e.z-a*np)}}function op(e){let t=Rd.aisleFor(e);return ap(Z(e.x,e.z),kd(0,Math.sign(e.z-t)),Z(e.x,t),e.y)}var sp=(e,t,n)=>ap(e,t?0:Math.PI,Z(n,e.z)),cp=Math.PI/2,lp=class{id;parking;params;mover;task=null;carrying=null;active;parked;busy=0;activeTime=0;tasksDone=0;constructor(e,t,n,r,i,a){this.id=e,this.parking=r,this.params=i,this.active=a,this.parked=!a;let o=a?t:r.at;this.mover=new Ld(o.x,o.z,a?n:cp,Math.PI/2/i.forkliftTurn,i.liftSpeed)}get available(){return this.active&&!this.parked&&!this.task&&this.mover.idle}get status(){return this.task?this.task.label:this.parked?this.active?`Saliendo del estacionamiento`:`Estacionado, fuera de servicio`:this.active?`Libre, esperando una tarea`:`Yendo a estacionarse`}assign(e){this.task=e;let t=this.mover,n=this.params.forkliftSpeed;t.then(Nd(tp(Z(t.x,t.z),e.from.access),n,{pivot:!0}),...this.service(e.from,!0),Nd(tp(e.from.access,e.to.access),n,{pivot:!0}),...this.service(e.to,!1),Fd(()=>{this.task=null,this.tasksDone++,this.active||this.park()}))}park(){let e=this.mover,t=this.params.forkliftApproachSpeed;e.then(Nd(tp(Z(e.x,e.z),this.parking.access),this.params.forkliftSpeed,{pivot:!0}),{kind:`turn`,heading:cp},Nd([this.parking.access,this.parking.at],t,{pivot:!0}),Fd(()=>{this.parked=!0,this.active&&this.unpark()}))}unpark(){let e=this.params.forkliftApproachSpeed;this.mover.then(Nd([this.parking.at,this.parking.access],e,{pivot:!0,reverse:!0}),Fd(()=>this.parked=!1))}service(e,t){let{forkliftApproachSpeed:n,handleTime:r}=this.params,i=Nd([e.access,e.origin],n,{pivot:!0}),a=Nd([e.origin,e.access],n,{pivot:!0,reverse:!0}),o={kind:`turn`,heading:e.heading};return t?[o,{kind:`lift`,to:e.level},i,Pd(r),Fd(()=>this.carrying=this.task.take()),{kind:`lift`,to:e.level+ip},a,{kind:`lift`,to:rp}]:[o,{kind:`lift`,to:e.level+ip},i,Pd(r),Fd(()=>{let t=this.carrying;this.carrying=null,Object.assign(t,{x:e.center.x,y:e.level,z:e.center.z,rotY:e.heading+Math.PI/2,moving:!1}),this.task.put(t)}),{kind:`lift`,to:e.level},a,{kind:`lift`,to:0}]}},up=w/2,dp=6,fp=S.z+2,pp=S.z-2,mp=v.x-1.8,hp=v.x+1.8,gp=_.maxZ+1.6+up,_p=_.maxZ+8,vp=C.maxZ-1,yp=C.maxZ+2,bp=C.maxZ+5.5,xp=C.maxZ-4,Sp=C.minZ,Cp=Sp+3,wp=_.minX+4,Tp=_.maxX-4,Ep=18,Dp=24,Op=(e,t)=>e.x+e.facing*t,kp=e=>Z(Op(e,t.wallThickness+.06+up),e.z),Ap=e=>e.facing===1?0:Math.PI,jp=y.flatMap(e=>Array.from({length:e.stalls},(t,n)=>({area:e.id===`espera-recepcion`?`recepcion`:`despacho`,index:n,center:Z(e.firstX+n*e.spacing,e.z+.4+up)}))),Mp=-Math.PI/2;function Np(e,t){let n=Z(Op(e,Ep),e.z+(t?8:-8));return{start:n,leg:{kind:`maneuver`,points:[n,...jd(n,Z(Op(e,Ep),e.z),Z(Op(e,13),e.z),10),kp(e)]}}}function Pp(e,t){let{x:n}=e.center,r=Z(n+(t?-9:9),Sp),i=Z(n,Sp-5);return{start:r,leg:{kind:`maneuver`,points:[r,...jd(r,Z(n,Sp),i,10),e.center]}}}function Fp(e){let t=e?pp:fp;return[{kind:`road`,points:Md([Z(e?S.maxX:S.minX,t),Z(mp,t),Z(mp,gp)],dp)}]}function Ip(e){return e?{at:Z(S.maxX,pp),heading:Math.PI}:{at:Z(S.minX,fp),heading:0}}function Lp(e){let{start:t,leg:n}=Np(e,!1);return[{kind:`yard`,points:Md([Z(mp,gp),Z(mp,vp),Z(t.x,vp),t],dp)},n]}function Rp(e){let t=e.area===`despacho`,{start:n,leg:r}=Pp(e,t),i=t?xp:vp,a=t?Tp:wp;return[{kind:`yard`,points:Md([Z(mp,gp),Z(mp,i),Z(a,i),Z(a,Sp),n],dp)},r]}function zp(e,t){let{start:n,leg:r}=Np(t,!0);return[{kind:`yard`,points:Md([e.center,Z(e.center.x,Cp),Z(n.x,Cp),n],dp)},r]}function Bp(e){let t=e.kind===`recepcion`?yp:bp,n=Op(e,Dp),r=Md([kp(e),Z(n,e.z),Z(n,t),Z(hp,t),Z(hp,_p)],dp),i=Md([Z(hp,_p),Z(hp,fp),Z(S.maxX,fp)],dp);return[{kind:`yard`,points:r},{kind:`road`,points:i}]}var Vp=.25,Hp=600,Up=[0,-1,1,2,3,4,0,-1,2,1],Wp=()=>({trucksArrived:0,trucksDocked:0,waitTotal:0,trucksDone:0,queueMax:0,palletsReceived:0,palletsStored:0,palletsReplenished:0,purchases:0,ordersReceived:0,ordersShipped:0,ordersOnTime:0,departures:0,departuresOnTime:0,delayTotal:0,maxWait:0,orderDelayTotal:0,expressPurchases:0,batchedPallets:0,batchSortTime:0,unloadBlocked:0,pickerBlocked:0,dockActive:0,dockBusy:0}),Gp=()=>({forklifts:0,pickers:0,docks:0,waiting:0,late:0,storage:0,express:0});function Kp(e){let t=e.map((e,t)=>[e.share,t]).sort((e,t)=>t[0]-e[0]),n=[],r=0;for(let[e,i]of t)r+=e,n[i]=r<=.5+1e-9?`A`:r<=.85+1e-9?`B`:`C`;return n}var qp=class{params;rand;demandRand;arrivalRand;leadRand;time;finished=!1;decisions;products;storage;receiving;shipping;docks;stalls;trucks=[];forklifts;stations;faces;orders=[];departures=[];purchases=[];floor=new Set;floorVersion=0;stats=Wp();costs=Gp();history=[];decisionLog=[];initialDecisions;queue=[];away=[];scheduled=[];lastSlot=-1/0;pending=0;nextUnplanned;nextOrder;nextCheck;ids={pallet:0,supplier:0,order:0};listeners=[];constructor(e=Ed,t=Cd,n=Sd){this.params=e,this.rand=yu(e.seed),this.demandRand=yu(e.seed*7919+1),this.arrivalRand=yu(e.seed*104729+2),this.leadRand=yu(e.seed*1299709+3),this.time=e.shiftStart,this.decisions=structuredClone(t),this.initialDecisions=structuredClone(t);let r=Kp(n);this.products=n.map((e,t)=>({def:e,index:t,abc:r[t],stockoutSince:null,stockoutTime:0,stockouts:0})),this.storage=new Rd(n.length);let o=(e,t)=>{let n=(e.kind===`recepcion`?m:h).flatMap(t=>g.map(n=>Z(t,e.z+n))),r={dock:e,index:t,truck:null,docked:!1,slots:n.map(()=>null),positions:n,claimed:n.map(()=>!1),crew:null,departures:[]};return r.crew=new Gf(r),r};this.receiving=i.map(o),this.shipping=a.map(o),this.docks=[...this.receiving,...this.shipping],this.stalls=jp.map(e=>({stall:e,truck:null})),this.stations=p.stationsZ.map((t,n)=>new Gd(n,t,e.pickerSpeed));let s=Hd(),c=(Math.min(...p.stationsZ)+Math.max(...p.stationsZ))/2,l=[...s].sort((e,t)=>Math.abs(e.z-c)-Math.abs(t.z-c)),f=this.products.map(e=>e.index).sort((e,t)=>n[t].share-n[e].share);this.faces=this.products.map(e=>{let t=l[f.indexOf(e.index)];return{product:e.index,pos:t,pickAt:Z(p.faceX+1.1,t.z),pallet:null,claimed:!1}});let[_,v,y]=d.longX,b=d.crossZ,x=[[Z(_,-8),Math.PI/2],[Z(-8,u[0]),Math.PI],[Z(4.5,u[3]),0],[Z(-4,b),0],[Z(v,6),-Math.PI/2],[Z(y,0),Math.PI/2]];this.forklifts=Array.from({length:e.maxForklifts},(t,n)=>{let r=-18+n*2.4,i={access:Z(r,-b),at:Z(r,-b-2)},[a,o]=x[n%x.length];return new lp(n+1,a,o,i,e,n<this.decisions.forklifts&&n<x.length)}),this.setupInitialState(),this.nextUnplanned=Su(this.arrivalRand,this.time,e.shiftStart,e.unplannedPerHour),this.nextOrder=Su(this.demandRand,this.time,e.shiftStart,e.ordersPerHour),this.nextCheck=this.time,this.sample()}sample(){this.history.push({time:this.time,total:this.totalCost,queue:this.queue.length,stock:this.products.map(e=>this.physicalStock(e.index)),late:this.stats.ordersShipped-this.stats.ordersOnTime})}onEvent(e){this.listeners.push(e)}emit(e,t=`info`){let n={time:this.time,text:e,kind:t};for(let e of this.listeners)e(n)}advance(e){for(this.pending+=e;this.pending>=Vp&&!this.finished;)this.step(Vp),this.pending-=Vp,this.time>=this.params.shiftEnd-1e-6&&this.endShift()}step(e){let t=this.params;for(this.time+=e;this.nextUnplanned!==null&&this.time>=this.nextUnplanned;){let e=this.arrivalRand;this.requestDelivery(Math.floor(e()*this.products.length),bu(e,...t.palletsPerTruck),!1),this.nextUnplanned=Su(e,this.nextUnplanned,t.shiftStart,t.unplannedPerHour)}for(let e=this.purchases.length-1;e>=0;e--){let t=this.purchases[e];this.time>=t.arriveAt&&(this.purchases.splice(e,1),this.requestDelivery(t.product,t.pallets,!0))}for(let e=this.scheduled.length-1;e>=0;e--){let t=this.scheduled[e];this.time>=t.at&&(this.scheduled.splice(e,1),this.spawnSupplier(t.product,t.pallets,t.planned))}for(;this.nextOrder!==null&&this.time>=this.nextOrder;)this.receiveOrder(),this.nextOrder=Su(this.demandRand,this.nextOrder,t.shiftStart,t.ordersPerHour);for(let e=this.away.length-1;e>=0;e--)this.time>=this.away[e].returnAt&&this.returnFromRoute(this.away.splice(e,1)[0].truck);this.time>=this.nextCheck&&(this.checkInventory(),this.nextCheck+=t.reorderCheck),this.applyResources(),this.manageDepartures(),this.assignWaitingTrucks();for(let t of[...this.trucks])t.mover.update(e);for(let t of this.forklifts)t.task&&(t.busy+=e),t.active&&(t.activeTime+=e),t.mover.update(e);for(let t of this.docks)t.crew.update(e,this);for(let t of this.stations)t.update(e,this);this.dispatchForklifts(),this.accumulate(e),this.stats.queueMax=Math.max(this.stats.queueMax,this.queue.length)}accumulate(e){let t=e/3600,n=this.costs,r=this.docks.filter(e=>this.isActive(e));n.forklifts+=this.forklifts.filter(e=>e.active).length*Td.forkliftHour*t,n.pickers+=this.stations.filter(e=>e.active).length*Td.pickerHour*t,n.docks+=r.length*Td.dockHour*t,n.waiting+=this.queue.length*Td.truckWaitHour*t,n.storage+=this.storage.occupied*Td.palletDay*(e/86400),this.stats.dockActive+=r.length*e,this.stats.dockBusy+=r.filter(e=>e.truck).length*e;for(let e of this.queue)this.stats.maxWait=Math.max(this.stats.maxWait,this.time-e.arrivedAt);this.time-this.history[this.history.length-1].time>=Hp&&this.sample()}endShift(){this.finished=!0;let e=this.stats,t=this.orders.filter(e=>e.state!==`shipped`).length,n=e.ordersShipped?Math.round(e.ordersOnTime/e.ordersShipped*100):100;this.sample(),this.emit(`Fin del turno (${_d(this.time)}). Pedidos despachados: ${e.ordersShipped}, ${n} % a tiempo`+(t?`; ${t} quedaron sin salir.`:`.`)+` Costo del turno: $ ${Math.round(this.totalCost).toLocaleString(`es-UY`)}.`,`ok`)}setDecision(e,t){this.decisions[e]=structuredClone(t);let n=this.decisionLog[this.decisionLog.length-1];n&&n.key===e&&this.time-n.time<60?n.value=structuredClone(t):this.decisionLog.push({time:this.time,key:e,value:structuredClone(t)})}get replenishAt(){return this.decisions.replenishEarly?this.params.replenishEarlyAt:this.params.replenishAt}isActive(e){return e.index<(e.dock.kind===`recepcion`?this.decisions.receivingDocks:this.decisions.shippingDocks)}applyResources(){let e=this.decisions.forklifts,t=this.forklifts.filter(e=>e.active).length;for(let n of this.forklifts){if(t>=e)break;n.active||(n.active=!0,t++)}for(let n of[!0,!1])for(let r of[...this.forklifts].reverse()){if(t<=e)break;r.active&&(!n||!r.task)&&(r.active=!1,t--)}for(let e of this.forklifts)e.mover.idle&&!e.task&&(e.active&&e.parked?e.unpark():!e.active&&!e.parked&&e.park());this.stations.forEach((e,t)=>e.active=t<this.decisions.pickers)}newPallet(e){return{id:++this.ids.pallet,product:e.product,x:0,y:0,z:0,rotY:0,height:e.height,maxHeight:e.height,shade:e.shade??(e.product>=0?Up[e.product%Up.length]:Math.floor(this.rand()*5)),cases:e.cases,moving:!1,receivedAt:e.receivedAt??this.time}}addFloorPallet(e,t,n){let r=this.newPallet(n);return Object.assign(r,{x:e.x,z:e.z,rotY:t,moving:n.moving??!1}),this.floor.add(r),this.floorVersion++,r}removeFloorPallet(e){this.floor.delete(e),this.floorVersion++}takeCase(e){let t=e.pallet;t.cases--,t.height=.12+(t.maxHeight-.12)*Math.min(1,t.cases/this.params.casesPerPallet),t.cases<=0?(e.pallet=null,this.removeFloorPallet(t)):this.floorVersion++}randomProduct(e){let t=e();for(let e of this.products)if(t-=e.def.share,t<=0)return e.index;return 0}makeTruck(e,t,n,r){let i={id:t,fleet:e,mover:new Ld(n.x,n.z,r),state:`road`,product:-1,pallets:0,planned:!1,arrivedAt:this.time,dock:null,stall:null,departure:null,ready:!1};return this.trucks.push(i),i}removeTruck(e){let t=this.trucks.indexOf(e);t>=0&&this.trucks.splice(t,1)}drive(e){let t=this.params;return e.map(e=>e.kind===`maneuver`?Nd(e.points,t.reverseSpeed,{reverse:!0}):Nd(e.points,e.kind===`road`?t.roadSpeed:t.truckSpeed))}freeStall(e){return this.stalls.find(t=>t.stall.area===e&&!t.truck)??null}releaseStall(e){for(let t of this.stalls)t.truck===e&&(t.truck=null);e.stall=null}freeReceivingDock(){return this.receiving.find(e=>!e.truck&&this.isActive(e))??null}currentDeparture(e){return e.departures.find(e=>e.state===`open`)??null}dockFor(e){if(e.dock)return e.dock;let t=this.shipping.filter(e=>this.isActive(e)),n=e=>e.departures.filter(e=>e.state===`open`).length,r=t.reduce((e,t)=>n(t)<n(e)?t:e,t[0]);return e.dock=r,r.departures.push(e),r.departures.sort((e,t)=>e.time-t.time),r}inTransitInside(e){let t=0;for(let n of this.receiving)for(let r of n.slots)r?.product===e&&t++;for(let n of this.forklifts)n.carrying?.product===e&&n.task&&!n.task.label.startsWith(`Reponiendo`)&&t++;return t}physicalStock(e){return Ud(this.faces[e])/this.params.casesPerPallet+ +!!this.forklifts.some(t=>t.carrying?.product===e&&t.task?.label.startsWith(`Reponiendo`))+this.storage.byProduct[e]+this.inTransitInside(e)}onOrder(e){let t=0;for(let n of this.trucks)!n.fleet&&n.product===e&&(t+=n.pallets);for(let n of this.purchases)n.product===e&&(t+=n.pallets);for(let n of this.scheduled)n.product===e&&(t+=n.pallets);return t}hasStock(e){return this.physicalStock(e)>0}checkInventory(){for(let e of this.products){let t=e.index,n=this.physicalStock(t);if(n<=0&&e.stockoutSince===null){e.stockoutSince=this.time,e.stockouts++;let n=this.orders.filter(e=>e.state!==`shipped`&&e.state!==`loaded`&&e.lines.some(e=>e.product===t&&e.picked<e.cases)).length;this.emit(`Quiebre de stock: no queda ${e.def.name} en el hub (${n} pedidos lo necesitan).`,`warn`)}else n>0&&e.stockoutSince!==null&&(e.stockoutTime+=this.time-e.stockoutSince,e.stockoutSince=null,this.emit(`Volvió a haber ${e.def.name} en el hub.`,`ok`));let r=this.decisions.reorderPoint[t],i=this.decisions.orderQty[t],a=n+this.onOrder(t);for(let e=0;a<=r&&e<3;e++)this.placePurchase(t,i),a+=i}}placePurchase(e,t){let n=this.products[e],r=this.decisions.express,i=xu(this.leadRand,...n.def.leadTime)*3600*(r?this.params.expressFactor:1),a=this.time+i;r&&(this.costs.express+=Td.expressPurchase,this.stats.expressPurchases++);let o=Math.ceil(t/this.params.truckMaxPallets);for(let n=0;n<o;n++){let r=Math.min(this.params.truckMaxPallets,t-n*this.params.truckMaxPallets);this.purchases.push({product:e,pallets:r,arriveAt:a+n*240})}this.stats.purchases++;let s=a<this.params.shiftEnd?`llega cerca de las ${_d(a)}`:`llega mañana`;this.emit(`${r?`Compra expresa`:`Pedido al proveedor`}: ${t} pallets de ${n.def.name} (${s}).`)}get totalCost(){let e=this.costs;return e.forklifts+e.pickers+e.docks+e.waiting+e.late+e.storage+e.express}requestDelivery(e,t,n){if(this.decisions.appointments>0&&!n){let r=Math.max(this.time,this.lastSlot+this.decisions.appointments*60);if(this.lastSlot=r,r>this.time){this.scheduled.push({at:r,product:e,pallets:t,planned:n});return}}this.spawnSupplier(e,t,n)}spawnSupplier(e,t,n){let r=Ip(!1),i=this.makeTruck(!1,`P-${String(++this.ids.supplier).padStart(2,`0`)}`,r.at,r.heading);Object.assign(i,{product:e,pallets:t,planned:n}),i.mover.then(...this.drive(Fp(!1)),Fd(()=>this.atGate(i)))}atGate(e){e.state=`gate`,e.arrivedAt=this.time,this.stats.trucksArrived++;let t=`${e.pallets} pallets de ${this.products[e.product].def.name}`;this.emit(e.planned?`Llega a portería el camión ${e.id} con ${t} (pedido del hub).`:`Llega sin aviso el camión ${e.id} con ${t}.`),e.mover.then(Pd(this.params.gateCheck),Fd(()=>this.afterGate(e)))}afterGate(e){let t=this.freeReceivingDock();if(t&&this.queue.length===0){this.sendToDock(e,t,Lp(t.dock));return}let n=this.freeStall(`recepcion`);n?(n.truck=e,e.stall=n.stall,e.state=`toStall`,this.queue.push(e),this.emit(`Muelles de recepción ocupados: ${e.id} va a la playa de espera (${this.queue.length} en cola).`,`warn`),e.mover.then(...this.drive(Rp(n.stall)),Fd(()=>e.state=`waiting`))):e.mover.then(Id(()=>!!this.freeStall(`recepcion`)),Fd(()=>this.afterGate(e)))}assignWaitingTrucks(){for(;this.queue.length&&this.queue[0].state===`waiting`;){let e=this.freeReceivingDock();if(!e)return;let t=this.queue.shift(),n=zp(t.stall,e.dock);this.releaseStall(t),this.sendToDock(t,e,n)}}sendToDock(e,t,n){t.truck=e,e.dock=t,e.state=`toDock`,this.stats.trucksDocked++,this.stats.waitTotal+=this.time-e.arrivedAt,this.stats.maxWait=Math.max(this.stats.maxWait,this.time-e.arrivedAt),e.mover.then(...this.drive(n),Fd(()=>this.supplierDocked(e)))}supplierDocked(e){let t=e.dock;t.docked=!0,e.state=`docked`,this.emit(`${e.id} estacionó en el muelle ${t.dock.id}: empieza la descarga.`),e.mover.then(Pd(this.params.dockSetup),Fd(()=>t.crew.unload(e,this)))}unloadDone(e){e.mover.then(Pd(this.params.paperwork),Fd(()=>this.supplierLeaves(e)))}supplierLeaves(e){let t=e.dock;t.docked=!1,t.truck=null,e.dock=null,e.state=`leaving`,this.stats.trucksDone++,this.emit(`${e.id} terminó de descargar en ${t.dock.id} y se retira (estuvo ${vd(this.time-e.arrivedAt)} en el hub).`,`ok`),e.mover.then(...this.drive(Bp(t.dock)),Fd(()=>this.removeTruck(e)))}receiveOrder(){let e=this.params,t=this.departures.find(t=>t.state===`open`&&t.time>=this.time+e.orderLeadTime&&t.orders.length<e.truckCapacity);t&&this.createOrder(t,`pending`)}createOrder(e,t,n=this.time){let r=this.params,i=this.demandRand,a=bu(i,...r.linesPerOrder),o=[];for(;o.length<a;){let e=this.randomProduct(i);o.some(t=>t.product===e)||o.push({product:e,cases:bu(i,...r.casesPerLine),picked:0})}let s={id:++this.ids.order,lines:o,cases:o.reduce((e,t)=>e+t.cases,0),createdAt:n,departure:e,firstDeparture:e,state:t};return e.orders.push(s),this.orders.push(s),this.stats.ordersReceived++,s}takeOrder(){let e=null;for(let t of this.orders)t.state!==`pending`||e&&t.departure.time>=e.departure.time||t.lines.every(e=>this.hasStock(e.product))&&(e=t);return e}takeCompanion(e){return this.orders.find(t=>t!==e&&t.state===`pending`&&t.departure===e.departure&&t.cases+e.cases<=this.params.batchMaxCases&&t.lines.every(e=>this.hasStock(e.product)))??null}manageDepartures(){let e=this.params;for(let t of this.departures){if(t.state!==`open`||t.truck||this.time<t.time-e.loadWindow)continue;if(t.orders.length===0){this.time>=t.time&&(t.state=`cancelled`);continue}let n=this.trucks.find(e=>e.fleet&&e.state===`parked`);n&&(this.dockFor(t),t.truck=n,n.departure=t,n.state=`assigned`)}for(let t of this.trucks){if(!t.fleet)continue;let n=t.departure;if(t.state===`assigned`&&n){let e=this.dockFor(n);if(e.truck||this.currentDeparture(e)!==n)continue;e.truck=t,t.dock=e,t.state=`toDock`;let r=zp(t.stall,e.dock);this.releaseStall(t),t.mover.then(...this.drive(r),Fd(()=>this.fleetDocked(t)))}else if(t.state===`docked`&&t.ready&&n&&this.time>=n.time){let r=t.dock,i=n.loaded===n.orders.length,a=r.slots.some(Boolean)||r.claimed.some(Boolean)||!!r.crew.pallet;(i||this.time>=n.time+e.maxDepartureWait&&!a)&&this.dispatchTruck(t)}}}fleetDocked(e){let t=e.dock,n=e.departure;t.docked=!0,e.state=`docked`,this.emit(`${e.id} se acercó al muelle ${t.dock.id} para la salida de las ${_d(n.time)} (${n.orders.length} pedidos).`),e.mover.then(Pd(180),Fd(()=>{e.ready=!0,t.crew.load(e)}))}palletLoaded(e,t){let n=e.departure;for(let e of t.orders??[])e.state===`staged`&&(e.state=`loaded`,n.loaded++)}dispatchTruck(e){let t=e.dock,n=e.departure,r=this.params;n.state=`gone`,n.departedAt=this.time,t.crew.stop(),t.docked=!1,t.truck=null,e.dock=null,e.ready=!1,e.state=`leaving`;let i=n.orders.filter(e=>e.state===`loaded`),a=n.orders.filter(e=>e.state!==`loaded`),o=this.departures.find(e=>e.state===`open`&&e.time>n.time);for(let e of a)o&&(e.departure=o,o.orders.push(e));n.orders=i;let s=this.time-n.time,c=this.stats,l=0;for(let e of i)e.state=`shipped`,c.orderDelayTotal+=Math.max(0,this.time-e.firstDeparture.time),e.firstDeparture===n&&s<=r.onTimeTolerance?c.ordersOnTime++:l++;this.costs.late+=l*Td.lateOrder,c.departures++,c.ordersShipped+=i.length,c.delayTotal+=Math.max(0,s);let u=s<=r.onTimeTolerance;u&&c.departuresOnTime++;let d=`Salió ${e.id} (salida de las ${_d(n.time)}) con ${i.length} pedidos`+(u?`, a tiempo`:` y ${vd(s)} de atraso`);a.length&&(d+=o?`; ${a.length} pedidos quedaron para la salida de las ${_d(o.time)}`:`; ${a.length} pedidos quedaron sin salir hoy`),this.emit(`${d}.`,u&&!a.length?`ok`:`warn`),e.mover.then(...this.drive(Bp(t.dock)),Fd(()=>{this.removeTruck(e),e.departure=null,this.away.push({truck:e,returnAt:this.time+xu(this.rand,...r.routeTime)})}))}returnFromRoute(e){let t=Ip(!0);Object.assign(e.mover,{x:t.at.x,z:t.at.z,heading:t.heading}),e.state=`returning`,this.trucks.push(e),e.mover.then(...this.drive(Fp(!0)),Pd(this.params.gateCheck/2),Id(()=>!!this.freeStall(`despacho`)),Fd(()=>{let t=this.freeStall(`despacho`);t.truck=e,e.stall=t.stall,e.mover.then(...this.drive(Rp(t.stall)),Fd(()=>e.state=`parked`))}))}dispatchForklifts(){for(let e of this.forklifts){if(!e.available)continue;let t=this.bestTask(e);t&&e.assign(t)}}bestTask(e){let t=Z(e.mover.x,e.mover.z),[n,r,i]=d.longX,a=[],o=(e,t)=>e.claimed.some((e,n)=>e&&n%g.length===t%g.length);for(let e of this.receiving){let t=e.slots.findIndex((t,n)=>t&&!t.moving&&!o(e,n));if(t<0)continue;let r=e.slots.filter(Boolean).length,i=sp(e.positions[t],!1,n);a.push({score:400+30*r+(e.crew.blocked?400:0),access:i.access,make:()=>{let n=e.slots[t].product,r=this.decisions.slotting===`abc`?this.products[n].abc:null,a=this.storage.freeSlot(this.rand,r);return a?(a.reserved=!0,e.claimed[t]=!0,{label:`Guardando en la estantería ${Rd.rowName(a)} un pallet de ${this.products[n].def.name}`,from:i,to:op(a),take:()=>{let n=e.slots[t];return e.slots[t]=null,e.claimed[t]=!1,this.removeFloorPallet(n),n},put:e=>{this.storage.put(a,e),this.stats.palletsStored++}}):null}})}let s=new Set(this.stations.map(e=>e.waitingFor).filter(e=>e!==null));for(let e of this.faces){let t=Ud(e);if(e.claimed||t>this.replenishAt||this.storage.available(e.product)===0)continue;let n=sp(e.pos,!0,r),i=this.products[e.product].def.name;a.push({score:s.has(e.product)?1e3:t===0?900:600+Math.max(0,this.params.replenishAt-t)*10,access:n.access,make:()=>{let t=this.storage.oldestSlot(e.product);return t?(t.reserved=!0,e.claimed=!0,{label:`Reponiendo ${i} en preparación (desde la estantería ${Rd.rowName(t)})`,from:op(t),to:n,take:()=>this.storage.take(t),put:t=>{e.claimed=!1,this.stats.palletsReplenished++;let n=e.pallet;n?(n.cases+=t.cases,n.maxHeight=Math.max(n.maxHeight,t.height),n.height=.12+(n.maxHeight-.12)*Math.min(1,n.cases/this.params.casesPerPallet),this.floorVersion++):(t.maxHeight=t.height,e.pallet=t,this.floor.add(t),this.floorVersion++)}}):null}})}for(let e of this.stations){let t=e.outputOrders;if(!e.output||!t.length||t.some(e=>e.state!==`ready`)||e.outputClaimed)continue;let n=t[0].departure,r=this.dockFor(n);if(this.currentDeparture(r)!==n)continue;let s=-1;if(r.positions.forEach((e,t)=>{!r.slots[t]&&!o(r,t)&&(s<0||e.x>r.positions[s].x)&&(s=t)}),s<0)continue;let c=sp(e.outputPos,!1,i),l=Math.max(0,Math.min(100,(3600-(n.time-this.time))/36));a.push({score:700+l,access:c.access,make:()=>(e.outputClaimed=!0,r.claimed[s]=!0,{label:`Llevando ${t.length>1?`los pedidos`:`el pedido`} ${t.map(e=>`#${e.id}`).join(` y `)} al muelle ${r.dock.id}`,from:c,to:sp(r.positions[s],!0,i),take:()=>{let t=e.output;return e.output=null,e.outputOrders=[],e.outputClaimed=!1,this.removeFloorPallet(t),t},put:e=>{r.slots[s]=e,r.claimed[s]=!1,this.floor.add(e),this.floorVersion++;for(let e of t)e.state=`staged`}})})}a.sort((e,n)=>n.score-3*Dd(t,n.access)-(e.score-3*Dd(t,e.access)));for(let e of a){let t=e.make();if(t)return t}return null}setupInitialState(){let e=this.params,t=this.rand,n=e.shiftStart,r=()=>`P-${String(++this.ids.supplier).padStart(2,`0`)}`;for(let r of this.products)for(let i=0;i<r.def.initialPallets;i++){let i=this.storage.freeSlot(t,null);if(!i)break;this.storage.put(i,this.newPallet({product:r.index,height:xu(t,.9,1.3),cases:e.casesPerPallet,receivedAt:n-t()*5*86400}))}for(let n of this.faces){let r=this.addFloorPallet(n.pos,Math.PI/2,{product:n.product,height:xu(t,.9,1.3),cases:bu(t,14,e.casesPerPallet)});r.height=.12+(r.maxHeight-.12)*(r.cases/e.casesPerPallet),n.pallet=r}for(let t=e.firstDeparture,n=0;t<=e.lastDeparture;t+=e.departureEvery,n++)this.departures.push({index:n,time:t,dock:null,orders:[],loaded:0,truck:null,state:`open`,departedAt:0});let i=[[0,3],[1,4],[3,6]],a=[2,5];for(let[a,o]of i){let i=this.receiving[a],s=this.makeTruck(!1,r(),kp(i.dock),Ap(i.dock));Object.assign(s,{product:o,pallets:bu(t,3,7),planned:!0,arrivedAt:n-xu(t,1200,3e3),state:`docked`,dock:i}),i.truck=s,i.docked=!0;let c=bu(t,2,5);for(let n=0;n<c;n++)i.slots[n]=this.addFloorPallet(i.positions[n],Math.PI/2,{product:o,height:xu(t,.9,1.4),cases:e.casesPerPallet});i.crew.unload(s,this)}[0,1].forEach(i=>{let o=this.stalls.filter(e=>e.stall.area===`recepcion`)[i],s=this.makeTruck(!1,r(),o.stall.center,Mp);Object.assign(s,{product:a[i],pallets:bu(t,...e.palletsPerTruck),planned:!0,arrivedAt:n-(12-6*i)*60,state:`waiting`,stall:o.stall}),o.truck=s,this.queue.push(s),this.stats.trucksArrived++});let[o,s,c]=this.departures,l=this.shipping[0];o.dock=l,l.departures.push(o);let u=l.positions.map((e,t)=>[e.x,t]).sort((e,t)=>t[0]-e[0]);for(let e=0;e<8;e++){let t=this.createOrder(o,e<6?`staged`:`pending`,n-7200);if(e>=6)continue;for(let e of t.lines)e.picked=e.cases;let r=u[e][1];l.slots[r]=this.addFloorPallet(l.positions[r],Math.PI/2,{product:-1,height:Math.min(1.6,t.cases*.06),cases:t.cases,shade:-1}),l.slots[r].orders=[t]}for(let e=0;e<6;e++)this.createOrder(s,`pending`,n-3600);for(let e=0;e<3;e++)this.createOrder(c,`pending`,n-1800);let d=Array.from({length:e.fleet},(e,t)=>`F-${t+1}`),f=this.makeTruck(!0,d[0],kp(l.dock),Ap(l.dock));Object.assign(f,{state:`docked`,ready:!0,dock:l,departure:o}),l.truck=f,l.docked=!0,o.truck=f,l.crew.load(f);let p=this.stalls.filter(e=>e.stall.area===`despacho`);[1,2,4].forEach((e,t)=>{let n=p[e],r=this.makeTruck(!0,d[t+1],n.stall.center,Mp);r.state=`parked`,n.truck=r,r.stall=n.stall});for(let t=4;t<e.fleet;t++){let e=this.makeTruck(!0,d[t],Z(0,0),0);this.removeTruck(e),this.away.push({truck:e,returnAt:n+(t-3)*50*60})}}get queueLength(){return this.queue.length}get averageWait(){return this.stats.trucksDocked?this.stats.waitTotal/this.stats.trucksDocked:0}get busyForklifts(){return this.forklifts.filter(e=>e.task).length}get activeForklifts(){return this.forklifts.filter(e=>e.active).length}get busyDocks(){return this.docks.filter(e=>e.truck).length}get trucksAway(){return this.away.length}get progress(){let{shiftStart:e,shiftEnd:t}=this.params;return(this.time-e)/(t-e)}get forkliftUtilization(){let e=this.forklifts.reduce((e,t)=>e+t.activeTime,0);return e>0?this.forklifts.reduce((e,t)=>e+t.busy,0)/e:0}get pickerUtilization(){let e=this.stations.reduce((e,t)=>e+t.activeTime,0);return e>0?this.stations.reduce((e,t)=>e+t.busy,0)/e:0}get dockUtilization(){return this.stats.dockActive>0?this.stats.dockBusy/this.stats.dockActive:0}get stockedOut(){return this.products.filter(e=>e.stockoutSince!==null)}get ordersWaitingStock(){let e=new Set(this.stockedOut.map(e=>e.index));return this.orders.filter(t=>(t.state===`pending`||t.state===`picking`)&&t.lines.some(t=>e.has(t.product)&&t.picked<t.cases)).length}stationStatus(e){return e.status(e=>this.products[e].def.name)}truckStatus(e){switch(e.state){case`road`:return`En camino al hub`;case`returning`:return`Volviendo del reparto`;case`gate`:return`En portería: registro de ingreso`;case`toStall`:return`Yendo a la playa de espera`;case`waiting`:return`Esperando un muelle libre (${vd(this.time-e.arrivedAt)})`;case`toDock`:return`Yendo al muelle ${e.dock.dock.id}`;case`docked`:if(e.fleet){let t=e.departure;return e.ready?this.time>t.time&&t.loaded<t.orders.length?`Esperando pedidos que faltan: ${t.loaded} de ${t.orders.length} a bordo`:`Cargando: ${t.loaded} de ${t.orders.length} pedidos a bordo`:`Acomodándose para cargar`}return e.dock?.crew.mode===`unload`?e.dock.crew.blocked?`Descarga detenida: no hay lugar en el piso`:`Descargando`:e.pallets===0?`Cerrando el remito`:`Acomodándose para descargar`;case`leaving`:return e.fleet?`Saliendo a reparto`:`Saliendo del hub`;case`parked`:return`Estacionado, esperando su próxima salida`;case`assigned`:return`Salida de las ${_d(e.departure.time)}: esperando que se libere el muelle`}}dockStatus(e){let t=e.truck;return t?e.docked?t.fleet?`${t.id} carga la salida de las ${_d(t.departure.time)}`:`${t.id} descargando ${this.products[t.product].def.name} (${t.pallets} pallets a bordo)`:t.state===`leaving`?`${t.id} saliendo`:`${t.id} en camino`:this.isActive(e)?`Libre`:`Cerrado (no habilitado)`}},Jp={avgWait:{label:`Espera promedio de camiones`,unit:`min`,better:`lower`},maxWait:{label:`Espera más larga de un camión`,unit:`min`,better:`lower`},onTime:{label:`Pedidos a tiempo`,unit:`%`,better:`higher`},cost:{label:`Costo del turno`,unit:`$`,better:`lower`},costPerOrder:{label:`Costo por pedido`,unit:`$`,better:`lower`},stockoutMinutes:{label:`Tiempo sin stock (sumando productos)`,unit:`min`,better:`lower`},occupancyEnd:{label:`Ocupación del almacén al cierre`,unit:`%`,better:`lower`},avgDelay:{label:`Atraso promedio por pedido`,unit:`min`,better:`lower`},equipmentHours:{label:`Horas de montacargas y muelles`,unit:`h`,better:`lower`},staffHours:{label:`Horas de personal`,unit:`h`,better:`lower`},stockEndA:{label:`Stock de productos A al cierre`,unit:`pallets`,better:`lower`},unshipped:{label:`Pedidos que no salieron`,unit:`pedidos`,better:`lower`}};function Yp(e){let t=Sd.map(e=>({...e,leadTime:[...e.leadTime]})),n=t.map(t=>t.share*(e.products?.[t.name]?.demand??1)),r=n.reduce((e,t)=>e+t,0);t.forEach((t,i)=>{let a=e.products?.[t.name];t.share=n[i]/r,a?.leadTime&&(t.leadTime=[...a.leadTime]),a?.initialPallets!==void 0&&(t.initialPallets=a.initialPallets)});let i={...structuredClone(Cd),...structuredClone(e.decisions??{})},a=new Set(e.editable===`all`?Object.keys(Cd):e.editable);return{file:e,params:{...Ed,...e.params??{}},decisions:i,products:t,editable:a}}function Xp(e){let t=e.stats,n=e.time,r=e.orders.filter(e=>e.state!==`shipped`),i=Math.max(1,t.ordersReceived),a=e.trucks.filter(e=>!e.fleet&&(e.state===`waiting`||e.state===`toStall`)),o=t.waitTotal+a.reduce((e,t)=>e+(n-t.arrivedAt),0),s=t.trucksDocked+a.length,c=t.orderDelayTotal+r.reduce((e,t)=>e+Math.max(0,n-t.firstDeparture.time),0),l=e.forklifts.reduce((e,t)=>e+t.activeTime,0),u=e.stations.reduce((e,t)=>e+t.activeTime,0);return{avgWait:s?o/s/60:0,maxWait:Math.max(t.maxWait,...a.map(e=>n-e.arrivedAt))/60,onTime:t.ordersOnTime/i*100,cost:e.totalCost,costPerOrder:e.totalCost/Math.max(1,t.ordersShipped),stockoutMinutes:e.products.reduce((e,t)=>e+t.stockoutTime+(t.stockoutSince===null?0:n-t.stockoutSince),0)/60,occupancyEnd:e.storage.occupied/e.storage.capacity*100,avgDelay:c/i/60,equipmentHours:(l+t.dockActive)/3600,staffHours:(l+u)/3600,stockEndA:e.products.filter(e=>e.abc===`A`).reduce((t,n)=>t+e.physicalStock(n.index),0),unshipped:r.length}}function Zp(e,t){switch(Jp[e].unit){case`$`:return`$ ${Math.round(t).toLocaleString(`es-UY`)}`;case`%`:return`${Math.round(t)} %`;case`min`:return t>=90?`${Math.floor(t/60)} h ${Math.round(t%60)} min`:`${Math.round(t)} min`;case`h`:return`${Math.round(t)} h`;case`pallets`:return Math.round(t)===1?`1 pallet`:`${Math.round(t)} pallets`;case`pedidos`:return Math.round(t)===1?`1 pedido`:`${Math.round(t)} pedidos`}}function Qp(e,t){let n=t[e.metric];return(e.max===void 0||n<=e.max+1e-9)&&(e.min===void 0||n>=e.min-1e-9)}function $p(e,t){let n=t[e.metric],r=Jp[e.metric].better===`lower`,i=e=>r?n<=e+1e-9:n>=e-1e-9;return i(e.gold)?`oro`:i(e.silver)?`plata`:i(e.bronze)?`bronce`:null}var em={oro:3,plata:2,bronce:1};function tm(e){return e<=0?`oro`:e<=2?`plata`:`bronce`}function nm(e,t){if(!e)return null;let n=tm(t);return em[e]>em[n]?n:e}function Q(e,t=``,n=``){let r=document.createElement(e);return t&&(r.className=t),n&&(r.textContent=n),r}var rm=`http://www.w3.org/2000/svg`;function im(e,t={}){let n=document.createElementNS(rm,e);for(let[e,r]of Object.entries(t))n.setAttribute(e,String(r));return n}var am=2700,om=600;function sm(){return{shown:new Map,samples:[],lastAt:-1/0,count:0}}function cm(e,t){let n=t.samples[t.samples.length-1];n&&e.time<n.time&&(t.samples.length=0),!(n&&e.time-n.time<om)&&(t.samples.push({time:e.time,forkliftBusy:e.forklifts.reduce((e,t)=>e+t.busy,0),forkliftActive:e.forklifts.reduce((e,t)=>e+t.activeTime,0),unloadBlocked:e.stats.unloadBlocked,pickerBlocked:e.stats.pickerBlocked}),t.samples.length>8&&t.samples.shift())}function lm(e,t){let n=e.samples[e.samples.length-1];if(!n)return null;let r=[...e.samples].reverse().find(e=>n.time-e.time>=t*60);if(!r)return null;let i=n.forkliftActive-r.forkliftActive;return{forkliftUse:i>0?(n.forkliftBusy-r.forkliftBusy)/i:0,unloadBlocked:n.unloadBlocked-r.unloadBlocked,pickerBlocked:n.pickerBlocked-r.pickerBlocked}}var um=e=>`$ ${Math.round(e).toLocaleString(`es-UY`)}`,dm=(e,t={})=>({title:D(e.title,t),text:D(e.text,t)});function fm(e,t,n){let r=(...e)=>e.some(e=>t.editable.has(e)),{shiftStart:i,shiftEnd:a}=e.params,o=e=>i+(e-8)*3600,s=[];if(n.count>=6)return null;let c=(t,r,i,a)=>{if(!r||s.length)return;let o=n.shown.get(t);o?o.level+1<i&&e.time-o.at>=am&&s.push({id:t,level:o.level+1,notice:a(o.level+1)}):s.push({id:t,level:0,notice:a(0)})},l=lm(n,30),u=lm(n,60),d=r(`reorderPoint`,`orderQty`,`express`),f=[...e.stockedOut].sort((e,t)=>e.abc.localeCompare(t.abc))[0],p=d?E.sinStock:E.sinStockRecepcion;if(c(`sin-stock`,!!f,2,e=>({...dm(p[e],{producto:f.def.name}),target:d?{product:f.def.name}:{kpi:`Quiebres de stock`},view:d?void 0:e?`recepcion`:`preparacion`})),d){let t=e.products.find(t=>t.abc!==`C`&&t.stockoutSince===null&&e.physicalStock(t.index)<=3);c(`poco-stock`,!!t,1,()=>({...dm(E.pocoStock,{producto:t.def.name,n:Math.max(1,Math.round(e.physicalStock(t.index)))}),target:{product:t.def.name}}))}let m=e.queueLength,h=r(`receivingDocks`,`appointments`);c(`cola`,h&&m>=(n.shown.has(`cola`)?4:5),2,e=>({...dm(E.cola[e],{n:m}),target:{kpi:e?`Utilización`:`Camiones esperando`},view:e?void 0:`patio`})),c(`piso-lleno`,h&&!!l&&l.unloadBlocked>=480,2,e=>({...dm(E.pisoLleno[e]),target:e?{kpi:`Utilización`}:void 0,view:`recepcion`})),c(`montacargas`,r(`forklifts`)&&e.time>=o(9.5)&&!!u&&u.forkliftUse>=.9,2,e=>({...dm(E.montacargas[e]),target:{kpi:`Utilización`}}));let g=e.orders.filter(e=>e.state===`pending`).length;c(`pedidos`,r(`pickers`,`batchPicking`)&&g>=(n.shown.has(`pedidos`)?8:10),2,e=>({...dm(E.pedidosAcumulados[e],{n:g}),target:e?void 0:{kpi:`Utilización`},view:`preparacion`})),c(`preparadores`,r(`replenishEarly`)&&!!l&&l.pickerBlocked>=900&&!e.stockedOut.length,2,e=>({...dm(E.preparadoresEsperando[e]),view:`preparacion`}));let _=e.stats.ordersShipped-e.stats.ordersOnTime;c(`tarde`,_>=5,1,()=>({...dm(E.pedidosTarde,{n:_}),target:{kpi:`Pedidos a tiempo`}}));let v=e.time-i,y=t.file.goals.find(e=>e.metric===`cost`&&e.max!==void 0),b=t.file.goals.find(e=>e.metric===`costPerOrder`&&e.max!==void 0),x=!1,S=``;y&&v>=10800?(x=e.totalCost*(a-i)/v>y.max*1.05,S=um(y.max)):b&&v>=10800&&e.stats.ordersShipped>=20&&(x=e.totalCost/e.stats.ordersShipped>b.max*1.1,S=`${um(b.max)} por pedido`),c(`costo`,x,2,e=>({...dm(E.costo[e],{tope:S}),target:{kpi:`Costo del turno`}})),c(`ociosos`,r(`forklifts`)&&e.time>=o(10)&&!!u&&u.forkliftUse<.4&&e.activeForklifts>=6,1,()=>({...dm(E.ociosos),target:{kpi:`Utilización`}}));let C=!e.decisionLog.length&&JSON.stringify(e.initialDecisions)===JSON.stringify(t.decisions);return c(`sin-cambios`,t.file.goals.length>0&&e.time>=o(9.5)&&C,1,()=>({...dm(E.sinCambios),target:{selector:`.side-panel`,tab:`decisiones`}})),s[0]??null}function pm(e,t,n){e.shown.set(t.id,{level:t.level,at:n}),e.lastAt=n,e.count++}var mm=`<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1 2V16h5.2v-.2c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>`,hm=4e4,gm=class{host;el;mem=sm();open=!1;pausedByMe=!1;glow=null;idleSince=performance.now();idleShown=!1;given=[];onCluesChange=()=>{};onGuide=()=>{};constructor(e){this.host=e,this.el=Q(`aside`,`coach-card`),this.el.hidden=!0,this.el.setAttribute(`role`,`dialog`),this.el.setAttribute(`aria-live`,`polite`),window.addEventListener(`keydown`,e=>{this.open&&e.key===`Escape`&&this.close()})}get clues(){return this.given.length}resetShift(){this.close(),this.mem=sm(),this.idleSince=performance.now()}resetScenario(){this.resetShift(),this.idleShown=!1,this.given=[],this.onCluesChange(0)}touch(){this.idleSince=performance.now()}update(){let e=this.host.sim();if(cm(e,this.mem),this.open||this.host.blocked()||e.finished)return;if(e.time<=e.params.shiftStart){!this.idleShown&&this.host.paused()&&performance.now()-this.idleSince>hm&&(this.idleShown=!0,this.onGuide(`aviso`,E.pausaInicial.title),this.showNotice({...E.pausaInicial,target:{selector:`.play-btn`}}));return}if(e.time-this.mem.lastAt<2700)return;let t=fm(e,this.host.scenario(),this.mem);t&&(pm(this.mem,t,e.time),this.onGuide(`aviso`,t.notice.title),this.showNotice(t.notice))}requestClue(){this.open&&this.close();let e=this.host.scenario(),t=e.file.clues??[],n=!!e.file.criteria;if(this.given.length>=t.length){this.render({kicker:`Pistas`,title:t.length?`No hay más pistas`:`Este escenario no tiene pistas`,text:t.length?`Ya se dieron todas las pistas de este escenario. El resto queda por descubrir.`:``,previous:!0});return}if(!n){this.giveClue();return}let r=this.given.length+1,i=tm(r),a=r===1?`Cada pista tiene un costo: con 1 o 2 pistas, la mejor medalla posible de este escenario pasa a ser plata; con 3 o más, bronce. Las metas se evalúan igual.`:i===tm(r-1)?`Esta sería la pista ${r}: la mejor medalla posible sigue siendo ${i}.`:`Esta sería la pista ${r}: la mejor medalla posible pasa a ser ${i}.`;this.render({kicker:`Pista`,title:`¿Pedir una pista?`,text:a,previous:!0,buttons:[{label:`Pedir la pista`,primary:!0,action:()=>this.giveClue()},{label:`Mejor no`,action:()=>this.close()}]})}giveClue(){let e=this.host.scenario().file.clues??[],t=e[this.given.length];this.given.push(t),this.onCluesChange(this.given.length),this.onGuide(`pista`,`Pista ${this.given.length}: ${t}`),this.render({kicker:`Pista ${this.given.length} de ${e.length}`,title:``,text:t,clue:!0,previous:!0,skipLast:!0})}showNotice(e){let t=[];e.view&&t.push({label:`Ir a mirar`,action:()=>this.host.look(e.view)}),this.render({kicker:`Aviso`,title:e.title,text:e.text,target:e.target,buttons:t})}render(e){this.clearGlow();let t=this.el;t.replaceChildren(),t.classList.toggle(`clue`,!!e.clue||e.kicker.startsWith(`Pista`)),t.setAttribute(`aria-label`,e.title||e.kicker);let n=Q(`div`,`coach-head`),r=Q(`span`,`coach-icon`);r.innerHTML=mm;let i=Q(`button`,`close-btn`);i.innerHTML=`<svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="m2 2 8 8M10 2l-8 8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,i.setAttribute(`aria-label`,`Cerrar`),i.addEventListener(`click`,()=>this.close()),n.append(r,Q(`span`,`coach-kicker`,e.kicker),i),t.append(n),e.title&&t.append(Q(`h3`,`coach-title`,e.title)),e.text&&t.append(Q(`p`,e.title?`coach-text`:`coach-text alone`,e.text));let a=e.previous?e.skipLast?this.given.slice(0,-1):this.given:[];if(a.length){let e=Q(`details`,`coach-previous`);e.append(Q(`summary`,``,a.length===1?`La pista anterior`:`Las ${a.length} pistas anteriores`));let n=Q(`ol`);for(let e of a)n.append(Q(`li`,``,e));e.append(n),t.append(e)}let o=Q(`div`,`coach-actions`),s=e.buttons??[];s.some(e=>e.primary)||s.push({label:`Entendido`,primary:!0,action:()=>this.close()});for(let e of s){let t=Q(`button`,e.primary?`report-btn primary`:`report-btn`,e.label);t.addEventListener(`click`,e.action),o.append(t)}t.append(o),t.hidden=!1,this.open=!0,e.target&&this.highlight(e.target);let c=this.host.sim();!this.host.paused()&&this.host.speed()===1&&c.time>c.params.shiftStart&&(this.host.pause(),this.pausedByMe=!0),o.querySelector(`.primary`)?.focus({preventScroll:!0})}close(){this.open&&(this.open=!1,this.el.hidden=!0,this.clearGlow(),this.pausedByMe&&this.host.paused()&&!this.host.sim().finished&&this.host.resume(),this.pausedByMe=!1)}highlight(e){let t=null;`kpi`in e?t=[...document.querySelectorAll(`.kpi`)].find(t=>t.querySelector(`.kpi-label`)?.textContent===e.kpi)??null:`product`in e?(this.host.showTab(`decisiones`),t=[...document.querySelectorAll(`.stock-table tbody tr`)].find(t=>t.querySelector(`.stock-name`)?.textContent?.endsWith(e.product))??null):(e.tab&&this.host.showTab(e.tab),t=document.querySelector(e.selector)),t&&(t.classList.add(`guide-glow`),t.scrollIntoView({block:`nearest`,behavior:`smooth`}),this.glow=t)}clearGlow(){this.glow?.classList.remove(`guide-glow`),this.glow=null}},_m=e=>`$ ${Math.round(e).toLocaleString(`es-UY`)}`,vm=e=>`${Math.round(e*100)} %`,ym=e=>`${String(Math.floor(e/3600)).padStart(2,`0`)}:${String(Math.floor(e%3600/60)).padStart(2,`0`)}`,bm=.9,xm=class{el;fill;value;constructor(e){this.el=Q(`div`,e?`meter-row`:`meter-row bare`),e&&this.el.append(Q(`span`,`meter-label`,e));let t=Q(`div`,`meter`);this.fill=Q(`span`),t.append(this.fill),this.value=Q(`span`,`meter-value`),this.el.append(t),e&&this.el.append(this.value)}set(e){this.fill.style.width=`${Math.round(Math.min(1,Math.max(0,e))*100)}%`;let t=e>=bm;this.value.textContent=vm(e),this.value.classList.toggle(`warn`,t),this.value.title=t?`Casi sin capacidad libre: puede ser un cuello de botella`:``,t&&(this.value.textContent=`⚠ ${vm(e)}`)}},Sm=class e{el;root;line;area;cursor;tip;points=[];domain={start:0,end:1,max:1};static W=200;static H=40;constructor(){this.el=Q(`div`,`spark`);let{W:t,H:n}=e;this.root=im(`svg`,{viewBox:`0 0 ${t} ${n}`,preserveAspectRatio:`none`,role:`img`,"aria-label":`Costo acumulado del turno`}),this.area=im(`polygon`,{class:`spark-area`}),this.line=im(`polyline`,{class:`spark-line`,"vector-effect":`non-scaling-stroke`}),this.cursor=im(`line`,{class:`spark-cursor`,y1:0,y2:n,"vector-effect":`non-scaling-stroke`}),this.cursor.style.display=`none`,this.root.append(this.area,this.line,this.cursor),this.tip=Q(`div`,`spark-tip`),this.tip.hidden=!0,this.el.append(this.root,this.tip),this.root.addEventListener(`pointermove`,e=>this.hover(e)),this.root.addEventListener(`pointerleave`,()=>this.hide())}set(t,n,r){this.points=t;let i=Math.max(1,...t.map(e=>e.total))*1.1;this.domain={start:n,end:r,max:i};let a=t.map(e=>this.toXY(e));if(this.line.setAttribute(`points`,a.map(([e,t])=>`${e},${t}`).join(` `)),a.length){let{H:t}=e;this.area.setAttribute(`points`,`${a[0][0]},${t} ${a.map(([e,t])=>`${e},${t}`).join(` `)} ${a[a.length-1][0]},${t}`)}}toXY(t){let{W:n,H:r}=e,{start:i,end:a,max:o}=this.domain;return[(t.time-i)/(a-i)*n,r-t.total/o*(r-2)]}hover(t){if(!this.points.length)return;let n=this.root.getBoundingClientRect(),r=(t.clientX-n.left)/n.width,i=this.domain.start+r*(this.domain.end-this.domain.start),a=this.points[0];for(let e of this.points)Math.abs(e.time-i)<Math.abs(a.time-i)&&(a=e);let[o]=this.toXY(a);this.cursor.setAttribute(`x1`,String(o)),this.cursor.setAttribute(`x2`,String(o)),this.cursor.style.display=``,this.tip.hidden=!1,this.tip.textContent=`${ym(a.time)} · ${_m(a.total)}`;let s=o/e.W*n.width;this.tip.style.left=`${Math.min(Math.max(s,40),n.width-40)}px`}hide(){this.cursor.style.display=`none`,this.tip.hidden=!0}},Cm=class{el;tiles=new Map;util={docks:new xm(`Muelles`),forklifts:new xm(`Montacargas`),pickers:new xm(`Preparadores`)};occupancy=new xm;chart=new Sm;constructor(e){this.el=Q(`footer`,`panel statsbar`),this.el.append(Q(`div`,`statsbar-tab`,`Indicadores del turno`));let t=(t,n,r,i=!1)=>{let a=Q(`button`,i?`kpi wide`:`kpi`);a.title=`Ver qué significa este indicador`;let o=Q(`div`,`kpi-value`,`—`),s=Q(`div`,`kpi-sub`);a.append(Q(`div`,`kpi-label`,n),o),r&&a.append(r),a.append(s),a.addEventListener(`click`,()=>e(t)),this.tiles.set(t,{root:a,value:o,sub:s}),this.el.append(a)};t(`espera`,`Camiones esperando`),t(`quiebres`,`Quiebres de stock`),t(`a-tiempo`,`Pedidos a tiempo`);let n=Q(`div`,`meters`);n.append(this.util.docks.el,this.util.forklifts.el,this.util.pickers.el),t(`utilizacion`,`Utilización`,n,!0),t(`costo`,`Costo del turno`,this.chart.el,!0),t(`ocupacion`,`Ocupación del almacén`,this.occupancy.el),this.tiles.get(`utilizacion`).value.remove(),this.tiles.get(`utilizacion`).sub.remove()}update(e){let t=e=>this.tiles.get(e);t(`espera`).value.textContent=String(e.queue),t(`espera`).sub.textContent=`Espera promedio: ${Math.round(e.avgWait/60)} min`;let n=e.stockouts.length;t(`quiebres`).value.textContent=n?`${n}`:`0`,t(`quiebres`).sub.replaceChildren(n?this.status(`critical`,`⚠`,`${e.stockouts.join(`, `)} · ${e.ordersWaitingStock} pedidos esperan`):this.status(`good`,`✓`,`Hay stock de todo`)),t(`a-tiempo`).value.textContent=e.shipped?vm(e.onTime/e.shipped):`—`,t(`a-tiempo`).sub.textContent=e.shipped?`${e.onTime} de ${e.shipped} despachados`:`Todavía no salió ningún pedido`,this.util.docks.set(e.utilization.docks),this.util.forklifts.set(e.utilization.forklifts),this.util.pickers.set(e.utilization.pickers),t(`costo`).value.textContent=_m(e.cost),this.chart.set(e.costHistory,e.shiftStart,e.shiftEnd),t(`costo`).sub.textContent=e.shipped?`${_m(e.cost/e.shipped)} por pedido despachado`:`Acumulado desde las 8:00`;let r=e.occupied/e.capacity;t(`ocupacion`).value.textContent=vm(r),this.occupancy.set(r),t(`ocupacion`).sub.textContent=`${e.occupied.toLocaleString(`es-UY`)} de ${e.capacity.toLocaleString(`es-UY`)} posiciones`}status(e,t,n){let r=Q(`span`,`status`);return r.append(Q(`span`,`status-icon ${e}`,t),document.createTextNode(n)),r}},wm={receivingDocks:`Muelles de recepción`,shippingDocks:`Muelles de despacho`,forklifts:`Montacargas`,pickers:`Preparadores`,slotting:`Ubicación en estanterías`,reorderPoint:`Punto de reorden`,orderQty:`Cantidad a pedir`,appointments:`Agenda de turnos`,express:`Compra expresa`,batchPicking:`Preparación por lotes`,replenishEarly:`Reposición anticipada`};function Tm(e,t,n,r){switch(e){case`slotting`:return t===`abc`?`según rotación (ABC)`:`cualquier lugar libre`;case`appointments`:return t?`un camión cada ${t} min`:`sin agenda`;case`express`:case`batchPicking`:case`replenishEarly`:return t?`sí`:`no`;case`reorderPoint`:case`orderQty`:{let e=t,i=n;return e.map((e,t)=>[e,t]).filter(([e,t])=>e!==i[t]).map(([e,t])=>`${r[t]} ${e}`).join(`, `)||`sin cambios`}default:return String(t)}}function Em(e,t,n){let r=[];for(let i of Object.keys(wm))JSON.stringify(e[i])!==JSON.stringify(t[i])&&r.push(`${wm[i]}: ${Tm(i,t[i],e[i],n)}`);return r}function Dm(e,t,n){let r=structuredClone(e);for(let e of t)e.time<=n&&(r[e.key]=structuredClone(e.value));return r}function Om(e,t,n,r,i){let a=Dm(e,t,n),o=[];for(let e of t)e.time<=n||(o.push(`${i(e.time)} · ${wm[e.key]}: ${Tm(e.key,e.value,a[e.key],r)}`),a[e.key]=structuredClone(e.value));return o}var km=60,Am=1800,jm=(e,t)=>JSON.stringify(e)===JSON.stringify(t),Mm=class{start;products;entries=[];seq=0;constructor(e,t){this.start=e,this.products=t}change(e,t,n,r,i){let a=i?`plan`:`cambio`,o=this.entries[this.entries.length-1];if(o&&o.kind===a&&o.key===t&&(i||e.time-o.time<km)){if(jm(o.from,r)){this.entries.pop();return}o.to=structuredClone(r),o.fromText=this.text(t,o.from,r),o.toText=this.text(t,r,o.from)}else jm(n,r)||this.entries.push({time:e.time,seq:this.seq++,kind:a,key:t,label:wm[t],from:structuredClone(n),to:structuredClone(r),fromText:this.text(t,n,r),toText:this.text(t,r,n),context:i?void 0:this.context(e)})}guide(e,t,n){this.entries.push({time:e.time,seq:this.seq++,kind:t,label:n})}signals(e){let t=new Map;for(let e of Object.keys(this.start))t.set(e,[JSON.stringify(this.start[e])]);let n=0,r=0,i=-1/0;for(let e of this.entries){if(e.kind===`aviso`||e.kind===`pista`){i=e.time;continue}let a=t.get(e.key),o=JSON.stringify(e.to);a.includes(o)?n++:a.push(o),e.time>=i&&e.time-i<=Am&&r++}let a=e=>this.entries.filter(t=>t.kind===e).length;return{attempt:e.attempt,restarts:e.restarts,planChanges:a(`plan`),turnChanges:a(`cambio`),undone:n,afterGuide:r,notices:a(`aviso`),clues:e.clues}}context(e){let t=e.stats;return{queue:e.queueLength,onTime:t.ordersShipped?Math.round(t.ordersOnTime/t.ordersShipped*100):null,cost:Math.round(e.totalCost),stockouts:e.stockedOut.map(e=>e.def.name)}}text(e,t,n){return Tm(e,t,n,this.products)}},Nm=e=>`$ ${Math.round(e).toLocaleString(`es-UY`)}`,Pm=`Fijo en este escenario`,Fm=class{min;max;onChange;opts;el;out;minus;plus;value;constructor(e,t,n,r,i,a={}){this.min=t,this.max=n,this.onChange=i,this.opts=a,this.value=r,this.el=Q(`div`,a.compact?`stepper compact`:`stepper`),this.minus=Q(`button`,`step-btn`,`−`),this.plus=Q(`button`,`step-btn`,`+`),this.minus.setAttribute(`aria-label`,`${e}: menos`),this.plus.setAttribute(`aria-label`,`${e}: más`),this.out=Q(`output`),this.out.setAttribute(`aria-live`,`polite`),this.out.setAttribute(`aria-label`,e),this.minus.addEventListener(`click`,()=>this.change(-1)),this.plus.addEventListener(`click`,()=>this.change(1)),this.el.append(this.minus,this.out,this.plus),a.enabled===!1&&(this.el.classList.add(`locked`),this.el.title=Pm),this.set(r)}set(e){this.value=e,this.out.textContent=this.opts.format?this.opts.format(e):String(e);let t=this.opts.enabled===!1;this.minus.disabled=t||e<=this.min,this.plus.disabled=t||e>=this.max}change(e){let t=Math.min(this.max,Math.max(this.min,this.value+e*(this.opts.step??1)));t!==this.value&&(this.set(t),this.onChange(t))}},Im=class{onChange;el;constructor(e,t,n,r){this.onChange=n,this.el=Q(`button`,`toggle`),this.el.setAttribute(`role`,`switch`),this.el.setAttribute(`aria-label`,e),this.el.append(Q(`span`,`toggle-knob`)),this.el.disabled=!r,r||(this.el.title=Pm),this.el.addEventListener(`click`,()=>{let e=this.el.getAttribute(`aria-checked`)!==`true`;this.set(e),this.onChange(e)}),this.set(t)}set(e){this.el.setAttribute(`aria-checked`,String(e)),this.el.classList.toggle(`on`,e)}},Lm=class{setup;onChange;el;steppers=new Map;toggles=new Map;slotButtons=[];stockCells=[];values;constructor(e,t,n,r){this.setup=e,this.onChange=n,this.values=structuredClone(t),this.el=Q(`div`,`decisions`);let i=Q(`button`,`reset-btn`,`Volver a los valores iniciales`);i.addEventListener(`click`,r);let a=Q(`p`,`dec-intro`,`Los cambios rigen en el momento. Al reiniciar el turno se mantienen, así se puede repetir el mismo día con otras decisiones y comparar.`);this.el.append(this.buildResources(),this.buildMethods(),this.buildSlotting(),this.buildPurchases(),a,i)}can(e){return this.setup.editable.has(e)}setValues(e){this.values=structuredClone(e);for(let t of[`receivingDocks`,`shippingDocks`,`forklifts`,`pickers`,`appointments`])this.steppers.get(t)?.set(e[t]);e.reorderPoint.forEach((e,t)=>this.steppers.get(`rop-${t}`)?.set(e)),e.orderQty.forEach((e,t)=>this.steppers.get(`qty-${t}`)?.set(e));for(let[t,n]of this.toggles)n.set(e[t]);this.slotButtons.forEach(t=>{let n=t.dataset.value===e.slotting;t.classList.toggle(`active`,n),t.setAttribute(`aria-pressed`,String(n))})}setStock(e){e.forEach((e,t)=>{let n=this.stockCells[t];n.value.textContent=e.out?`0`:e.stock<1&&e.stock>0?`<1`:String(Math.floor(e.stock)),n.row.classList.toggle(`out`,e.out),n.note.textContent=e.out?`⚠ Sin stock`:e.onOrder>0?`+${e.onOrder} en camino`:``,n.note.className=e.out?`stock-note out`:`stock-note`})}section(e,t,n){let r=Q(`section`,`section`),i=Q(`div`,`section-head`);return i.append(document.createTextNode(e)),n.some(e=>this.can(e))||(r.classList.add(`locked`),i.append(Q(`span`,`lock-note`,`🔒 ${Pm}`))),r.append(i),t&&r.append(Q(`p`,`dec-intro`,t)),r}row(e,t,n){let r=Q(`div`,`dec-row`),i=Q(`div`,`dec-text`);return i.append(Q(`div`,`dec-label`,e),Q(`div`,`dec-hint`,t)),r.append(i,n),r}buildResources(){let{limits:e,costs:t}=this.setup,n=this.section(`Recursos del turno`,`Más recursos dan más capacidad, pero cuestan aunque estén parados.`,[`receivingDocks`,`shippingDocks`,`forklifts`,`pickers`]),r=[[`receivingDocks`,`Muelles de recepción`,`${Nm(t.dockHour)} por hora cada uno`],[`shippingDocks`,`Muelles de despacho`,`${Nm(t.dockHour)} por hora cada uno`],[`forklifts`,`Montacargas`,`${Nm(t.forkliftHour)} por hora cada uno`],[`pickers`,`Preparadores`,`${Nm(t.pickerHour)} por hora cada uno`]],i=Q(`div`,`dec-list`);for(let[t,n,a]of r){let[r,o]=e[t],s=new Fm(n,r,o,this.values[t],e=>{this.values[t]=e,this.onChange(t,e)},{enabled:this.can(t)});this.steppers.set(t,s),i.append(this.row(n,a,s.el))}return n.append(i),n}buildMethods(){let{limits:e,costs:t}=this.setup,n=this.section(`Métodos de trabajo`,`Cambiar la forma de trabajar, en vez de sumar recursos.`,[`appointments`,`express`,`batchPicking`,`replenishEarly`]),r=Q(`div`,`dec-list`),i=new Fm(`Agenda de turnos`,e.appointments[0],e.appointments[1],this.values.appointments,e=>{this.values.appointments=e,this.onChange(`appointments`,e)},{step:5,format:e=>e?`${e}′`:`No`,enabled:this.can(`appointments`)});this.steppers.set(`appointments`,i),r.append(this.row(`Agenda de turnos`,`Los proveedores sin aviso entran con turno: un camión cada tantos minutos`,i.el));let a=[[`express`,`Compra expresa`,`El proveedor tarda 60 % menos; recargo de ${Nm(t.expressPurchase)} por compra`],[`batchPicking`,`Preparación por lotes`,`Dos pedidos de la misma salida en un solo recorrido y un solo pallet; al final hay que separar y etiquetar las cajas de cada pedido`],[`replenishEarly`,`Reposición anticipada`,`Reponer el lugar de picking cuando todavía le quedan bastantes cajas`]];for(let[e,t,n]of a){let i=new Im(t,this.values[e],t=>{this.values[e]=t,this.onChange(e,t)},this.can(e));this.toggles.set(e,i),r.append(this.row(t,n,i.el))}return n.append(r),n}buildSlotting(){let e=this.section(`Ubicación en estanterías`,`Dónde se guarda cada pallet que llega.`,[`slotting`]),t=Q(`div`,`segmented`);t.setAttribute(`role`,`group`),t.setAttribute(`aria-label`,`Ubicación en estanterías`);for(let[e,n,r]of[[`random`,`Cualquier lugar libre`,`Ubicación caótica: se aprovecha todo el espacio, pero lo que más se mueve puede quedar lejos o alto.`],[`abc`,`Según rotación (ABC)`,`Los productos A, cerca de la preparación y abajo; los C, lejos y arriba.`]]){let i=Q(`button`,`seg-btn`,n);i.dataset.value=e,i.title=this.can(`slotting`)?r:Pm,i.disabled=!this.can(`slotting`),i.addEventListener(`click`,()=>{this.values.slotting=e,this.setValues(this.values),this.onChange(`slotting`,e)}),this.slotButtons.push(i),t.append(i)}return e.append(t),this.setValues(this.values),e}buildPurchases(){let{products:e,limits:t}=this.setup,n=this.section(`Compras a proveedores`,`Cuando el stock más lo que viene en camino baja del punto de reorden, se le pide al proveedor la cantidad indicada (en pallets). El proveedor tarda unas horas en llegar.`,[`reorderPoint`,`orderQty`]),r=Q(`table`,`stock-table`),i=Q(`tr`);for(let[e,t]of[[`Producto`,`Clase ABC y nombre`],[`Stock`,`Pallets en el hub`],[`Reorden`,`Punto de reorden: pedir cuando el stock baja a este nivel`],[`Pedir`,`Cantidad de pallets que se le piden al proveedor`]]){let n=Q(`th`,``,e);n.title=t,n.scope=`col`,i.append(n)}return r.append(Q(`thead`),Q(`tbody`)),r.tHead.append(i),e.forEach((e,n)=>{let i=Q(`tr`),a=Q(`td`,`stock-name`),o=Q(`span`,`abc abc-${e.abc}`,e.abc);o.title=`Clase ${e.abc}`,a.append(o,document.createTextNode(e.name));let s=Q(`td`,`stock-cell`),c=Q(`span`,`stock-value`,`—`),l=Q(`span`,`stock-note`);s.append(c,l);let u=new Fm(`Punto de reorden de ${e.name}`,t.reorderPoint[0],t.reorderPoint[1],this.values.reorderPoint[n],e=>{this.values.reorderPoint[n]=e,this.onChange(`reorderPoint`,[...this.values.reorderPoint])},{compact:!0,enabled:this.can(`reorderPoint`)}),d=new Fm(`Cantidad a pedir de ${e.name}`,t.orderQty[0],t.orderQty[1],this.values.orderQty[n],e=>{this.values.orderQty[n]=e,this.onChange(`orderQty`,[...this.values.orderQty])},{compact:!0,enabled:this.can(`orderQty`)});this.steppers.set(`rop-${n}`,u),this.steppers.set(`qty-${n}`,d);let f=Q(`td`);f.append(u.el);let p=Q(`td`);p.append(d.el),i.append(a,s,f,p),r.tBodies[0].append(i),this.stockCells.push({value:c,note:l,row:i})}),n.append(r),n}},Rm=[1,5,20],zm={info:`#3f9ae0`,ok:`#3fbf6a`,warn:`#e8a33a`},Bm={logo:`<svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="16" fill="${gu.red}"/><g fill="none" stroke="#fff" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3.4v2.2"/><circle cx="16" cy="9.1" r="1.4"/><path d="M12.9 10.9 7.5 14.4M19.1 10.9l5.4 3.5M7.5 14.4h17v9.1h-17z"/><path d="M10.3 17v3.8M13.15 17v3.8M16 17v3.8M18.85 17v3.8M21.7 17v3.8"/></g></svg>`,home:`<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11 12 4l9 7v9h-6v-6H9v6H3z" fill="currentColor"/></svg>`,help:`<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M9.3 9.4a2.8 2.8 0 1 1 3.9 2.6c-.8.4-1.2 1-1.2 1.9v.6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="17.6" r="1.2" fill="currentColor"/></svg>`,fullscreen:`<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>`,close:`<svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="m2 2 8 8M10 2l-8 8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,minus:`<svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 6h8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,play:`<svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15l12.5-7.5z" fill="currentColor"/></svg>`,pause:`<svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 4.5h4v15h-4zM13.5 4.5h4v15h-4z" fill="currentColor"/></svg>`,restart:`<svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path d="M5.5 3.5v4h4" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,finish:`<svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 21V4" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path d="M6 4h11l-2.5 4L17 12H6" fill="currentColor"/></svg>`,lamp:`<svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1 2V16h5.2v-.2c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,scenarios:`<svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16M4 12h16M4 19h10" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>`},Vm=class{cb;sidePanel;infoBox;viewButtons=new Map;notifList;help;root;tabs=new Map;playButton;clockTime;dayFill;speedButtons;scenarioLabel;finishButton;clueCount;finishTimer=0;factsBox=null;keysBlocked=()=>!1;constructor(e,t,n){this.cb=n,this.root=e;let r=Q(`header`,`topbar`),i=Q(`div`,`brand`);i.innerHTML=Bm.logo,i.append(Q(`span`,`brand-name`,`Hub Logístico`),Q(`span`,`brand-sub`,`Ingeniería en Logística`));let a=Q(`button`,`stage-chip`);a.title=`Ver el escenario y sus metas, o cambiar de escenario`,a.innerHTML=Bm.scenarios,this.scenarioLabel=Q(`span`,``,`Turno libre`),a.append(this.scenarioLabel),a.addEventListener(`click`,()=>n.onScenario());let o=Q(`div`,`simbar`);this.playButton=this.iconButton(Bm.pause,`Pausar (barra espaciadora)`,()=>n.onTogglePause()),this.playButton.classList.add(`play-btn`);let s=Q(`div`,`sim-clock`);this.clockTime=Q(`span`,`clock-time`,`08:00`);let c=Q(`div`,`day-bar`);this.dayFill=Q(`span`),c.append(this.dayFill),s.append(this.clockTime,c);let l=Q(`div`,`speed-group`);l.setAttribute(`role`,`group`),l.setAttribute(`aria-label`,`Velocidad del reloj`),this.speedButtons=Rm.map(e=>{let t=Q(`button`,`speed-btn`,`×${e}`);return t.title=e===1?`Velocidad normal: el turno dura unos 10 minutos`:`${e} veces más rápido`,t.addEventListener(`click`,()=>n.onSpeed(e)),l.append(t),t});let u=this.iconButton(Bm.restart,`Reiniciar el turno`,()=>n.onRestart());u.classList.add(`restart-btn`),this.finishButton=this.iconButton(Bm.finish,`Terminar: adelantar hasta las 18:00 y ver el reporte`,()=>{this.finishButton.classList.contains(`confirm`)?(this.resetFinish(),n.onFinish()):(this.finishButton.classList.add(`confirm`),this.finishButton.title=`¿Terminar? Tocar de nuevo para adelantar hasta las 18:00 con las decisiones actuales`,this.finishButton.setAttribute(`aria-label`,this.finishButton.title),this.finishTimer=window.setTimeout(()=>this.resetFinish(),4e3))}),this.finishButton.classList.add(`finish-btn`),o.append(this.playButton,s,l,u,this.finishButton);let d=Q(`button`,`clue-btn`);d.innerHTML=Bm.lamp,d.append(Q(`span`,``,`Pista`)),this.clueCount=Q(`span`,`clue-count`),this.clueCount.hidden=!0,d.append(this.clueCount),d.title=`Pedir una pista`,d.addEventListener(`click`,()=>n.onClue());let f=Q(`div`,`topbar-actions`);f.append(d,this.iconButton(Bm.home,`Vista general`,()=>n.onView(t[0])),this.iconButton(Bm.help,`Ayuda`,()=>this.toggleHelp(!0)),this.iconButton(Bm.fullscreen,`Pantalla completa`,()=>this.toggleFullscreen())),r.append(i,a,o,f),this.sidePanel=Q(`aside`,`panel side-panel empty`);let p=Q(`div`,`panel-tabs`);p.setAttribute(`role`,`tablist`);for(let[e,t]of[[`decisiones`,`Decisiones`],[`explorar`,`Explorar el hub`]]){let n=Q(`button`,`tab-btn`,t);n.setAttribute(`role`,`tab`),n.addEventListener(`click`,()=>this.showTab(e));let r=Q(`div`,`side-scroll`);r.setAttribute(`role`,`tabpanel`),this.tabs.set(e,{button:n,body:r}),p.append(n)}this.sidePanel.append(p,this.tabs.get(`decisiones`).body,this.tabs.get(`explorar`).body);let m=this.tabs.get(`explorar`).body,h=Q(`section`,`section views-section`);h.append(Q(`div`,`section-head`,`Vistas`));let g=Q(`div`,`views`);t.forEach((e,t)=>{let r=Q(`button`,`view-btn`),i=Q(`span`,`dot`);i.style.background=e.color,r.append(i,Q(`span`,``,e.name),Q(`span`,`view-key`,String(t+1))),r.addEventListener(`click`,()=>n.onView(e)),this.viewButtons.set(e.id,r),g.append(r)}),h.append(g);let _=Q(`section`,`section`);_.append(Q(`div`,`section-head`,`Ficha`)),this.infoBox=Q(`div`),_.append(this.infoBox),m.append(h,_),this.showInfo(null),this.showTab(`decisiones`);let v=Q(`section`,`panel notifications`),y=Q(`div`,`panel-head`,`Notificaciones`),b=Q(`button`,`close-btn`);b.innerHTML=Bm.minus,b.setAttribute(`aria-label`,`Contraer notificaciones`),b.addEventListener(`click`,()=>v.classList.toggle(`collapsed`)),y.append(b),this.notifList=Q(`ul`,`notif-list`),v.append(y,this.notifList),this.help=this.buildHelp(),e.append(r,this.sidePanel,v,this.help),window.addEventListener(`keydown`,e=>{if(!(e.target instanceof HTMLInputElement||this.keysBlocked())){if(e.key===` `){if(e.target instanceof HTMLButtonElement)return;e.preventDefault(),n.onTogglePause()}else if(e.key===`Escape`)this.help.hidden?n.onCloseInfo():this.toggleHelp(!1);else if(e.key===`h`||e.key===`H`||e.key===`?`)this.toggleHelp(this.help.hidden===!0);else{let r=Number(e.key);r>=1&&r<=t.length&&n.onView(t[r-1])}}})}resetFinish(){window.clearTimeout(this.finishTimer),this.finishButton.classList.remove(`confirm`),this.finishButton.title=`Terminar: adelantar hasta las 18:00 y ver el reporte`,this.finishButton.setAttribute(`aria-label`,this.finishButton.title)}setScenario(e){this.scenarioLabel.textContent=e}setClues(e){this.clueCount.hidden=e===0,this.clueCount.textContent=String(e),this.clueCount.title=e===1?`1 pista pedida`:`${e} pistas pedidas`}mountOverlay(e){this.root.append(e)}mountDecisions(e){this.tabs.get(`decisiones`).body.replaceChildren(e)}mountDashboard(e){this.root.insertBefore(e,this.help)}showTab(e){for(let[t,{button:n,body:r}]of this.tabs){let i=t===e;n.classList.toggle(`active`,i),n.setAttribute(`aria-selected`,String(i)),r.hidden=!i}}setActiveView(e){for(let[t,n]of this.viewButtons)n.classList.toggle(`active`,t===e)}setClock(e,t,n){this.clockTime.textContent=e,this.dayFill.style.width=`${Math.round(Math.min(1,t)*1e3)/10}%`;let r=n.paused||n.finished;this.playButton.innerHTML=r?Bm.play:Bm.pause;let i=n.finished?`Terminó el turno`:r?`Continuar (barra espaciadora)`:`Pausar (barra espaciadora)`;this.playButton.title=i,this.playButton.setAttribute(`aria-label`,i),this.playButton.disabled=n.finished,this.finishButton.disabled=n.finished,this.playButton.classList.toggle(`paused`,r&&!n.finished),this.speedButtons.forEach((e,t)=>{let r=Rm[t]===n.speed;e.classList.toggle(`active`,r),e.setAttribute(`aria-pressed`,String(r))})}updateFacts(e){if(this.factsBox){this.factsBox.replaceChildren();for(let t of e)this.factsBox.append(Q(`div`,``,t.label),Q(`div`,`value`,t.value))}}showInfo(e,t){if(this.infoBox.replaceChildren(),this.factsBox=null,this.sidePanel.classList.toggle(`empty`,!e),e&&this.showTab(`explorar`),!e){this.infoBox.append(Q(`div`,`info-empty`,`Con un clic en cualquier elemento del hub (una zona, una estantería, un muelle, un montacargas…) se ve qué es y qué conceptos de logística se trabajan ahí.`));return}let n=Q(`div`,`info-card`),r=Q(`div`,`info-head`),i=Q(`div`);i.append(Q(`div`,`info-kind`,e.kind),Q(`h2`,`info-title`,e.title));let a=Q(`button`,`close-btn`);a.innerHTML=Bm.close,a.setAttribute(`aria-label`,`Cerrar ficha`),a.addEventListener(`click`,()=>this.cb.onCloseInfo()),r.append(i,a),n.append(r,Q(`p`,`info-desc`,e.description));let o=t??e.facts;if(o?.length&&(this.factsBox=Q(`div`,`facts`),n.append(this.factsBox),this.updateFacts(o)),e.concepts?.length){let t=Q(`div`);t.append(Q(`div`,`label-small`,`Conceptos clave`));let r=Q(`div`,`tags`);for(let t of e.concepts)r.append(Q(`span`,`tag`,t));t.append(r),n.append(t)}if(e.courses?.length){let t=Q(`div`);t.append(Q(`div`,`label-small`,`Asignaturas`));let r=Q(`ul`,`courses`);for(let t of e.courses)r.append(Q(`li`,``,t));t.append(r),n.append(t)}this.infoBox.append(n)}clearNotifications(){this.notifList.replaceChildren()}notify(e,t,n){let r=Q(`li`,`notif`);n===`warn`&&r.classList.add(`warn`);let i=Q(`span`,`dot`);i.style.background=n?zm[n]:gu.redLight,n===`warn`&&(e=`Atención: ${e}`);let a=Q(`div`);for(a.append(Q(`time`,``,t),document.createTextNode(e)),r.append(i,a),this.notifList.prepend(r);this.notifList.children.length>30;)this.notifList.lastChild?.remove()}iconButton(e,t,n){let r=Q(`button`,`icon-btn`);return r.innerHTML=e,r.title=t,r.setAttribute(`aria-label`,t),r.addEventListener(`click`,n),r}toggleHelp(e){this.help.hidden=!e}toggleFullscreen(){document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.()}buildHelp(){let e=Q(`div`,`help`);e.hidden=!0,e.addEventListener(`click`,t=>{t.target===e&&this.toggleHelp(!1)});let t=Q(`div`,`panel help-card`),n=Q(`div`,`panel-head`,`Cómo moverse por el hub`),r=Q(`button`,`close-btn`);r.innerHTML=Bm.close,r.setAttribute(`aria-label`,`Cerrar ayuda`),r.addEventListener(`click`,()=>this.toggleHelp(!1)),n.append(r);let i=Q(`div`,`help-body`),a=Q(`button`,`report-btn tour-again`,`Ver el recorrido de la pantalla`);a.addEventListener(`click`,()=>{this.toggleHelp(!1),this.cb.onTour()}),i.append(a);let o=(e,t)=>{i.append(Q(`h3`,``,e));let n=Q(`div`,`keys`);for(let[e,r]of t){let t=Q(`div`);for(let n of e.split(` + `))t.childNodes.length&&t.append(` + `),t.append(Q(`kbd`,``,n));n.append(t,Q(`div`,``,r))}i.append(n)};return o(`Con el mouse`,[[`Arrastrar con clic izquierdo`,`Mover el mapa`],[`Arrastrar con clic derecho`,`Girar la cámara`],[`Rueda`,`Acercar o alejar`],[`Clic`,`Ver la ficha de un elemento`],[`Doble clic`,`Acercarse a un elemento`]]),o(`Con el teclado`,[[`Espacio`,`Pausar o continuar el reloj`],[`1 … 7`,`Ir a una vista`],[`Esc`,`Cerrar la ficha`],[`H`,`Mostrar u ocultar esta ayuda`]]),o(`En pantalla táctil`,[[`Un dedo`,`Mover el mapa`],[`Dos dedos`,`Girar y acercar`]]),i.append(Q(`h3`,``,`El reloj del turno`)),i.append(Q(`p`,``,`El turno va de 8:00 a 18:00. A velocidad ×1 dura unos 10 minutos; con ×5 y ×20 pasa más rápido. Se puede pausar en cualquier momento para mirar con calma o pensar una decisión, y reiniciar para volver a las 8:00: con las mismas decisiones, el día se repite igual.`)),i.append(Q(`h3`,``,`Qué pasa en el hub`)),i.append(Q(`p`,``,`Cuando el stock de un producto baja del punto de reorden, el hub le hace un pedido al proveedor y el camión llega unas horas después; algunos camiones llegan además sin aviso. Si no hay muelle libre esperan en la playa. Se descargan pallet por pallet y los montacargas los guardan en las estanterías. Los preparadores arman los pedidos de los clientes con cajas de los lugares de picking, que los montacargas reponen, y los pedidos terminados se cargan en los camiones de reparto, que salen a hora fija.`)),i.append(Q(`h3`,``,`Los escenarios`)),i.append(Q(`p`,``,`Con el botón del escenario (arriba a la izquierda) se elige qué jugar: el turno libre o un escenario con un problema y metas. Cada escenario arranca en pausa para planificar. Al terminar el turno (o con el botón de la bandera, que adelanta hasta las 18:00) aparece un reporte con las metas, una clasificación con medallas, qué pasó y por qué, y la tabla de la clase.`)),i.append(Q(`h3`,``,`Las decisiones`)),i.append(Q(`p`,``,`En la pestaña "Decisiones" se elige cuántos muelles, montacargas y preparadores trabajan, dónde se guarda la mercadería y cuándo y cuánto se le compra a cada proveedor. Los cambios rigen en el momento y sus efectos se ven en los indicadores de abajo. Con un clic en un indicador se explica qué mide y cómo mejorarlo.`)),i.append(Q(`p`,``,`Con un clic en un camión, un montacargas, un preparador o un lugar de picking se ve qué está pasando ahí en ese momento.`)),i.append(Q(`h3`,``,`Avisos y pistas`)),i.append(Q(`p`,``,`Durante el turno aparecen avisos con una lamparita: señalan qué está pasando y dónde mirar, sin decir qué decidir. A velocidad ×1 el reloj se detiene hasta cerrar el aviso. Con el botón «Pista» se pide ayuda; en los escenarios con metas, cada pista baja la mejor medalla posible: con 1 o 2 pistas, como mucho plata; con 3 o más, bronce.`)),t.append(n,i),e.append(t),e}},Hm=e=>`$ ${Math.round(e).toLocaleString(`es-UY`)}`,Um=e=>e>=90?`${Math.floor(e/60)} h ${Math.round(e%60)} min`:`${Math.round(e)} min`,Wm=e=>`${Math.round(e*100)} %`;function Gm(e,t,n,r=!1){let i=[],a=e.stats,o=e.decisions,s=(e.time-e.params.shiftStart)/3600,c=(...e)=>e.some(e=>n.has(e)),l=a.unloadBlocked/60;if(t.avgWait>25){let n=l>60?`la descarga estuvo frenada ${Um(l)} porque los montacargas no retiraban a tiempo lo descargado: el cuello de botella eran los montacargas, no solo los muelles`:`los muelles estuvieron ocupados el ${Wm(e.dockUtilization)} del tiempo y no alcanzaban para la cantidad de camiones que llegaban juntos`;i.push({tone:`bad`,text:`Los camiones esperaron en promedio ${Um(t.avgWait)} (el más demorado, ${Um(t.maxWait)}): ${n}. La estadía costó ${Hm(e.costs.waiting)}.`})}else l>60&&i.push({tone:`info`,text:`La descarga estuvo frenada ${Um(l)} en total por falta de lugar en el piso de recepción: los montacargas iban justos.`});o.appointments>0&&i.push({tone:t.avgWait<=25?`good`:`info`,text:`Con la agenda, los proveedores sin aviso entraron con turno cada ${o.appointments} minutos: la espera promedio quedó en ${Um(t.avgWait)}. Turnos muy espaciados demoran la mercadería; muy seguidos, no evitan la cola.`});let u=e.forkliftUtilization;u>=.85?i.push({tone:`bad`,text:`Los montacargas estuvieron ocupados el ${Wm(u)} del tiempo: trabajaron al límite y son el primer recurso que se satura. Cuando un recurso pasa del 85 %, cualquier pico se convierte en espera.`}):u<.45&&e.activeForklifts>3&&c(`forklifts`)&&i.push({tone:`info`,text:`Los montacargas trabajaron solo el ${Wm(u)} del tiempo: había más de los necesarios, y cada uno cuesta ${Hm(Td.forkliftHour)} por hora aunque esté parado.`});let d=e.pickerUtilization;d>=.85&&i.push({tone:`bad`,text:`Los preparadores estuvieron trabajando el ${Wm(d)} del tiempo: la preparación trabajó al límite y es el cuello de botella más probable.`});let f=a.pickerBlocked/60;if(f>180){let e;e=t.stockoutMinutes>60?`Buena parte fue por los quiebres de stock: no había nada en el hub para reponer.`:o.replenishEarly?`Aun con reposición anticipada, los montacargas no llegaban a reponer a tiempo.`:c(`replenishEarly`,`forklifts`)?`La reposición anticipada o más montacargas reducen esa espera.`:`Los montacargas no llegaban a reponer a tiempo.`,i.push({tone:`bad`,text:`Los preparadores pasaron ${Um(f)} (sumando todos) esperando mercadería en un lugar de picking. ${e}`})}if(t.onTime<85&&d<.85&&u<.85&&f<=180&&t.stockoutMinutes<60){let e=a.batchSortTime>0?` Por lotes se camina menos, pero separar y etiquetar las cajas de cada pedido les sumó ${Um(a.batchSortTime/60)} de trabajo.`:``,t=``;c(`pickers`)&&o.pickers<5?t=` Más capacidad en la preparación (el cuello de botella) es lo que cambia el resultado; en montacargas o muelles, no.`:c(`batchPicking`,`replenishEarly`)&&(!o.batchPicking||!o.replenishEarly)&&(t=` Con los 5 puestos ocupados ya no se puede sumar gente: queda cambiar la forma de trabajar.`),i.push({tone:`bad`,text:`La preparación no tuvo capacidad suficiente para tantos pedidos: no faltó mercadería y los montacargas no estaban saturados.${e}${t}`})}a.batchedPallets>0&&i.push({tone:`info`,text:`Con preparación por lotes se armaron ${a.batchedPallets} pallets con dos pedidos cada uno: menos caminata y menos envolturas por pedido. A cambio, separar y etiquetar las cajas de cada pedido ocupó ${Um(a.batchSortTime/60)} de los preparadores (sumando todos).`});let p=e.dockUtilization;p<.3&&o.receivingDocks+o.shippingDocks>=6&&c(`receivingDocks`,`shippingDocks`)&&i.push({tone:`info`,text:`Los muelles se usaron solo el ${Wm(p)} del tiempo habilitado. Con menos muelles se ahorra ${Hm(Td.dockHour)} por hora cada uno.`});let m=e.params.casesPerPallet;for(let t of e.products){let n=t.stockoutTime+(t.stockoutSince===null?0:e.time-t.stockoutSince);if(n<60)continue;let r=0;for(let n of e.orders)for(let e of n.lines)e.product===t.index&&(r+=e.cases);let a=r/m/Math.max(1,s),[,c]=t.def.leadTime,l=o.express?c*e.params.expressFactor:c,u=Math.ceil(a*l);i.push({tone:`bad`,text:`${t.def.name} estuvo ${Um(n/60)} sin stock. Se vendieron unos ${a.toFixed(1).replace(`.`,`,`)} pallets por hora y el proveedor tarda hasta ${l.toFixed(1).replace(`.`,`,`)} h: durante esa demora se venden unos ${u} pallets. El punto de reorden estaba en ${o.reorderPoint[t.index]}.`})}if(a.expressPurchases>0){let t=a.expressPurchases>=4,n=t&&c(`orderQty`)?` Pidiendo más cantidad por vez se hacen menos compras y se paga menos recargo.`:``;i.push({tone:t?`bad`:`info`,text:`Se hicieron ${a.expressPurchases} compras expresas: el recargo sumó ${Hm(e.costs.express)}. Acortan la demora, pero cuestan en cada compra.${n}`})}if(t.occupancyEnd>85){let e=c(`reorderPoint`,`orderQty`)?`Pedir de más llena las estanterías.`:`Entró toda la mercadería del día y ocupó casi todo el lugar.`;i.push({tone:c(`reorderPoint`,`orderQty`)?`bad`:`info`,text:`El almacén terminó al ${Math.round(t.occupancyEnd)} %: casi sin lugar para lo que llega. ${e}`})}let h=a.ordersShipped-a.ordersOnTime;t.unshipped>0&&i.push({tone:`bad`,text:`${t.unshipped} pedidos no llegaron a salir en el día.`}),h>0&&i.push({tone:t.onTime<85?`bad`:`info`,text:`${h} pedidos salieron tarde: las multas sumaron ${Hm(e.costs.late)}. Un atraso en la preparación se arrastra a las salidas siguientes.`});let g=i.some(e=>e.tone===`bad`);return r&&g?i.push({tone:`bad`,text:`El costo pasó el tope del escenario. Revisar en "Costo del turno por rubro" qué pesó más.`}):r?i.unshift({tone:`bad`,text:`Los camiones, el stock y los pedidos anduvieron bien, pero el costo pasó el tope: se pagaron más recursos de los necesarios. Revisar en "Costo del turno por rubro" qué pesó más; en logística, resolver el problema también incluye hacerlo al menor costo.`}):g||i.unshift({tone:`good`,text:`El hub funcionó sin cuellos de botella graves: los camiones no esperaron de más, hubo mercadería y los pedidos salieron en hora.`}),i}var Km=`hub-logistico:intentos`,qm=`hub-logistico:grupo`;function Jm(){try{let e=localStorage.getItem(Km),t=e?JSON.parse(e):[];return Array.isArray(t)?t:[]}catch{return[]}}function Ym(){return Jm()}function Xm(e){return Jm().filter(t=>t.scenario===e)}function Zm(e){try{let t=Jm();t.push(e),localStorage.setItem(Km,JSON.stringify(t.slice(-300)))}catch{}}function Qm(e){try{localStorage.setItem(Km,JSON.stringify(Jm().filter(t=>t.scenario!==e)))}catch{}}function $m(){try{return localStorage.getItem(qm)??``}catch{return``}}function eh(e){try{localStorage.setItem(qm,e)}catch{}}var th=[`#3987e5`,`#d95926`,`#199e70`,`#c98500`],nh=640,rh=200,ih={left:52,right:96,top:12,bottom:26},ah=e=>`${String(Math.floor(e/3600)).padStart(2,`0`)}:${String(Math.floor(e%3600/60)).padStart(2,`0`)}`;function oh(e){let t=Q(`div`,`chart`),n=im(`svg`,{viewBox:`0 0 ${nh} ${rh}`,role:`img`,"aria-label":e.label}),r=Math.max(1,...e.series.flatMap(e=>e.values))*1.1,i=t=>ih.left+(t-e.start)/(e.end-e.start)*(nh-ih.left-ih.right),a=e=>rh-ih.bottom-e/r*(rh-ih.top-ih.bottom);for(let t=0;t<=3;t++){let i=r/1.1*(t/3);n.append(im(`line`,{class:`chart-grid`,x1:ih.left,x2:nh-ih.right,y1:a(i),y2:a(i)}));let o=im(`text`,{class:`chart-tick`,x:ih.left-6,y:a(i)+4,"text-anchor":`end`});o.textContent=e.format(i),n.append(o)}for(let t=Math.ceil(e.start/3600);t*3600<=e.end;t+=2){let e=im(`text`,{class:`chart-tick`,x:i(t*3600),y:192,"text-anchor":`middle`});e.textContent=`${t}:00`,n.append(e)}e.series.forEach((t,r)=>{let o=th[r%th.length],s=t.values.map((t,n)=>`${i(e.times[n])},${a(t)}`).join(` `);if(n.append(im(`polyline`,{class:`chart-line`,points:s,stroke:o})),e.series.length>1&&t.values.length){let r=t.values.length-1,o=im(`text`,{class:`chart-label`,x:i(e.times[r])+6,y:a(t.values[r])+4});o.textContent=t.name,n.append(o)}});let o=im(`line`,{class:`chart-cursor`,y1:ih.top,y2:rh-ih.bottom});o.style.display=`none`,n.append(o);let s=Q(`div`,`chart-tip`);if(s.hidden=!0,n.addEventListener(`pointermove`,t=>{let r=n.getBoundingClientRect(),a=e.start+((t.clientX-r.left)/r.width*nh-ih.left)/(nh-ih.left-ih.right)*(e.end-e.start),c=0;e.times.forEach((t,n)=>{Math.abs(t-a)<Math.abs(e.times[c]-a)&&(c=n)}),o.setAttribute(`x1`,String(i(e.times[c]))),o.setAttribute(`x2`,String(i(e.times[c]))),o.style.display=``,s.hidden=!1,s.replaceChildren(Q(`strong`,``,ah(e.times[c]))),e.series.forEach((t,n)=>{let r=Q(`div`),i=Q(`span`,`chart-key`);i.style.background=th[n%th.length],r.append(i,document.createTextNode(`${t.name}: ${e.format(t.values[c])}`)),s.append(r)}),s.style.left=`${i(e.times[c])/nh*100}%`}),n.addEventListener(`pointerleave`,()=>{o.style.display=`none`,s.hidden=!0}),t.append(n,s),e.series.length>1){let n=Q(`div`,`chart-legend`);e.series.forEach((e,t)=>{let r=Q(`span`),i=Q(`span`,`chart-key`);i.style.background=th[t%th.length],r.append(i,document.createTextNode(e.name)),n.append(r)}),t.append(n)}return t}function sh(e,t){let n=Q(`div`,`bar-list`),r=Math.max(1,...e.map(e=>e.value));for(let i of e){let e=Q(`div`,`bar-row`),a=Q(`div`,`bar-track`),o=Q(`span`);o.style.width=`${i.value/r*100}%`,a.append(o),e.append(Q(`span`,`bar-label`,i.label),a,Q(`span`,`bar-value`,t(i.value))),n.append(e)}return n}var ch=28800,lh={plan:`Plan (8:00)`,cambio:`Cambio en el turno`,aviso:`Aviso`,pista:`Pista`};function uh(e){if(e==null)return``;let t=typeof e==`number`?String(Math.round(e*100)/100).replace(`.`,`,`):e;return/[";\n\r]/.test(t)?`"${t.replace(/"/g,`""`)}"`:t}function dh(e){return`﻿`+e.map(e=>e.map(uh).join(`;`)).join(`\r
`)}var fh=e=>e?e[0].toUpperCase()+e.slice(1):``,ph=e=>ie.find(t=>t.id===e)?.title??e,mh=e=>new Date(e).toLocaleString(`es-UY`,{dateStyle:`short`,timeStyle:`short`});function hh(e){let t=Object.keys(Jp),n=[[`Escenario`,`Grupo`,`Fecha`,`Intento del grupo`,`Metas cumplidas`,`Medalla dinero`,`Medalla tiempo`,`Medalla servicio`,`Medalla propia`,`Pistas pedidas`,`Avisos recibidos`,`Reinicios sin terminar`,`Cambios al planificar`,`Cambios en el turno`,`Cambios deshechos`,`Cambios después de un aviso o pista`,...t.map(e=>`${Jp[e].label} (${Jp[e].unit})`),`Decisiones`]];for(let r of e){let e=r.signals;n.push([ph(r.scenario),r.group,mh(r.date),e?.attempt,r.solved?`Sí`:`No`,fh(r.medals.money),fh(r.medals.time),fh(r.medals.service),fh(r.medals.extra),r.clues??0,e?.notices,e?.restarts,e?.planChanges,e?.turnChanges,e?.undone,e?.afterGuide,...t.map(e=>r.metrics[e]),r.plan.join(` · `)])}return dh(n)}function gh(e){let t=[[`Escenario`,`Grupo`,`Fecha del intento`,`Hora del turno`,`Tipo`,`Qué`,`Valor anterior`,`Valor nuevo`,`Camiones esperando`,`Pedidos a tiempo (%)`,`Costo hasta ese momento ($)`,`Productos sin stock`]];for(let n of e)for(let e of n.history??[])t.push([ph(n.scenario),n.group,mh(n.date),e.time<=ch?`08:00 (plan)`:_d(e.time),lh[e.kind],e.label,e.fromText,e.toText,e.context?.queue,e.context?.onTime,e.context?.cost,e.context?.stockouts.join(`, `)]);return dh(t)}function _h(e,t){let n=URL.createObjectURL(new Blob([t],{type:`text/csv;charset=utf-8`})),r=document.createElement(`a`);r.href=n,r.download=e,document.body.append(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}function vh(...e){return`${e.join(`-`).normalize(`NFD`).replace(/[̀-ͯ]/g,``).toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-|-$/g,``)}-${new Date().toISOString().slice(0,10)}.csv`}var yh=[`money`,`time`,`service`,`extra`],bh={oro:`Oro`,plata:`Plata`,bronce:`Bronce`},xh={money:{metric:`cost`,label:`Dinero`,gold:0,silver:0,bronze:0},time:{metric:`avgWait`,label:`Espera`,gold:0,silver:0,bronze:0},service:{metric:`onTime`,label:`Servicio`,gold:0,silver:0,bronze:0},extra:{metric:`stockoutMinutes`,label:`Sin stock`,gold:0,silver:0,bronze:0}};function Sh(e){return e?Q(`span`,`medal medal-${e}`,bh[e]):Q(`span`,`medal medal-none`,`Sin medalla`)}function Ch(e){let t=Jp[e.metric].better===`lower`?`≤`:`≥`,n=t=>Zp(e.metric,t);return`Oro ${t} ${n(e.gold)} · Plata ${t} ${n(e.silver)} · Bronce ${t} ${n(e.bronze)}`}var wh=class{cb;el;body;sortBy=`balanced`;constructor(e){this.cb=e,this.el=Q(`div`,`report-overlay`),this.el.hidden=!0;let t=Q(`article`,`report`);t.setAttribute(`role`,`dialog`),t.setAttribute(`aria-modal`,`true`),t.setAttribute(`aria-label`,`Reporte del turno`),this.body=Q(`div`,`report-body`),t.append(this.body),this.el.append(t),this.el.addEventListener(`keydown`,e=>{e.key===`Escape`&&this.close()})}get open(){return!this.el.hidden}close(){this.el.hidden=!0}show(e,t,n,r){let{clues:i,history:a,restarts:o}=r,s=Xp(t),c=e.file,l=c.goals.length>0&&c.goals.every(e=>Qp(e,s)),u=c.criteria,d=Object.fromEntries(yh.map(e=>[e,l&&u?nm($p(u[e],s),i):null])),f=t.products.map(e=>e.def.name),p=t.params.shiftStart,m=Dm(t.initialDecisions,t.decisionLog,p),h=Om(t.initialDecisions,t.decisionLog,p,f,_d),g={id:`${Date.now()}-${Math.round(Math.random()*1e6)}`,scenario:c.id,group:n||`Sin nombre`,date:new Date().toISOString(),metrics:s,solved:l,medals:d,plan:[...Em(e.decisions,m,f),...h.length?[h.length===1?`1 cambio durante el turno`:`${h.length} cambios durante el turno`]:[]],clues:i};g.signals=a.signals({attempt:Xm(c.id).filter(e=>e.group===g.group).length+1,restarts:o,clues:i}),g.history=a.entries,Zm(g);let _=this.body;_.replaceChildren();let v=Q(`header`,`report-head`),y=Q(`div`);y.append(Q(`div`,`report-kicker`,`Reporte del turno`),Q(`h2`,`report-title`,c.title));let b=new Date().toLocaleString(`es-UY`,{dateStyle:`short`,timeStyle:`short`});y.append(Q(`div`,`report-meta`,`${g.group} · ${b}`));let x=Q(`button`,`close-btn report-close`,`✕`);if(x.setAttribute(`aria-label`,`Cerrar el reporte`),x.addEventListener(`click`,()=>this.close()),v.append(y,x),_.append(v),c.goals.length){let e=Q(`div`,l?`report-banner solved`:`report-banner`);e.append(Q(`strong`,``,l?`✓ Escenario resuelto`:`✗ Metas no alcanzadas`)),e.append(document.createTextNode(l?` Se cumplieron todas las metas. La clasificación muestra en qué se destacó esta solución.`:` Revisar "Qué pasó" para encontrar el cuello de botella y volver a intentar.`)),_.append(e)}if(c.goals.length){let e=this.section(`Metas`),t=Q(`ul`,`goal-list`);for(let e of c.goals){let n=Qp(e,s),r=Q(`li`,n?`ok`:`fail`);r.append(Q(`span`,`goal-icon`,n?`✓`:`✗`),Q(`span`,`goal-text`,e.text),Q(`span`,`goal-value`,Zp(e.metric,s[e.metric]))),t.append(r)}e.append(t),_.append(e)}if(u){let e=this.section(`Clasificación de esta solución`);if(l||e.append(Q(`p`,`report-note`,`Las medallas se dan cuando se cumplen todas las metas. Estos son los valores logrados:`)),i>0){let t=i===1?`Se pidió 1 pista`:`Se pidieron ${i} pistas`;e.append(Q(`p`,`report-note clue-note`,`${t}: la mejor medalla posible es ${tm(i)}.`))}let t=Q(`div`,`medal-grid`);for(let e of yh){let n=u[e],r=Q(`div`,`medal-card`);r.append(Q(`div`,`medal-label`,n.label),Q(`div`,`medal-metric`,Jp[n.metric].label),Q(`div`,`medal-value`,Zp(n.metric,s[n.metric]))),r.append(Sh(d[e]),Q(`div`,`medal-scale`,Ch(n))),t.append(r)}e.append(t),_.append(e)}let S=this.section(`Cómo fue el día`);S.append(this.chart(e,t),Q(`h4`,`report-sub`,`Costo del turno por rubro`));let C=t.costs,w=[{label:`Montacargas`,value:C.forklifts},{label:`Preparadores`,value:C.pickers},{label:`Muelles`,value:C.docks},{label:`Estadía de camiones`,value:C.waiting},{label:`Multas por atraso`,value:C.late},{label:`Almacenamiento`,value:C.storage},{label:`Recargo compras expresas`,value:C.express}].filter(e=>e.value>.5);S.append(sh(w,e=>`$ ${Math.round(e).toLocaleString(`es-UY`)}`)),S.append(Q(`p`,`report-note`,`Total: ${Zp(`cost`,s.cost)} · ${Zp(`costPerOrder`,s.costPerOrder)} por pedido despachado.`)),_.append(S);let T=this.section(`Qué pasó`),E=Q(`ul`,`finding-list`),D=c.goals.some(e=>(e.metric===`cost`||e.metric===`costPerOrder`)&&!Qp(e,s));for(let n of Gm(t,s,e.editable,D)){let e=Q(`li`,`finding ${n.tone}`);e.append(Q(`span`,`finding-icon`,n.tone===`bad`?`⚠`:n.tone===`good`?`✓`:`•`),Q(`span`,``,n.text)),E.append(e)}T.append(E),_.append(T);let O=this.section(`El concepto: ${c.concept.title}`);O.append(Q(`p`,`report-text`,c.concept.text)),_.append(O);let k=this.section(`Decisiones tomadas`),A=Em(e.decisions,m,f);k.append(Q(`h4`,`report-sub`,`Al empezar el turno`)),k.append(this.list(A.length?A:[`Las mismas con que arranca el escenario.`])),k.append(Q(`h4`,`report-sub`,`Cómo se trabajó`)),k.append(this.processView(g.signals)),k.append(Q(`h4`,`report-sub`,`Historial del turno`)),k.append(this.historyView(g.history,p));let j=Q(`button`,`link-btn`,`Descargar el historial (planilla para Excel)`);if(j.addEventListener(`click`,()=>_h(vh(`historial`,c.title,g.group),gh([g]))),k.append(j),_.append(k),_.append(this.classTable(e,g.id)),c.questions.length){let e=this.section(`Para pensar`),t=Q(`ol`,`question-list`);for(let e of c.questions)t.append(Q(`li`,``,e));e.append(t),_.append(e)}let ee=Q(`footer`,`report-actions`),M=Q(`button`,`report-btn primary`,`Repetir el escenario`);M.addEventListener(`click`,()=>{this.close(),this.cb.onRepeat()});let te=Q(`button`,`report-btn`,`Elegir otro escenario`);te.addEventListener(`click`,()=>{this.close(),this.cb.onChooseScenario()});let ne=Q(`button`,`report-btn`,`Imprimir o guardar en PDF`);ne.addEventListener(`click`,()=>window.print());let re=Q(`button`,`report-btn`,`Cerrar y ver el hub`);re.addEventListener(`click`,()=>this.close()),ee.append(M,te,ne,re),_.append(ee),this.el.hidden=!1,x.focus({preventScroll:!0}),this.el.scrollTop=0}processView(e){let t=Q(`div`),n=Q(`div`,`process-grid`),r=(e,t,n)=>e===1?t:n,i=[[e.attempt,`n.º de intento del grupo`],[e.restarts,r(e.restarts,`reinicio sin terminar antes`,`reinicios sin terminar antes`)],[e.planChanges,r(e.planChanges,`cambio al planificar`,`cambios al planificar`)],[e.turnChanges,r(e.turnChanges,`cambio con el turno en marcha`,`cambios con el turno en marcha`)],[e.undone,r(e.undone,`cambio deshecho`,`cambios deshechos`)],[e.afterGuide,r(e.afterGuide,`cambio tras un aviso o pista`,`cambios tras un aviso o pista`)],[e.notices,r(e.notices,`aviso recibido`,`avisos recibidos`)],[e.clues,r(e.clues,`pista pedida`,`pistas pedidas`)]];for(let[e,t]of i){let r=Q(`div`,`process-tile`);r.append(Q(`span`,`process-n`,String(e)),Q(`span`,`process-label`,t)),n.append(r)}return t.append(n,Q(`p`,`report-note`,`Son indicios para conversar con el grupo, no un juicio. Muchos reinicios y cambios deshechos suelen indicar ensayo y error; pocos cambios, hechos cuando un indicador mostraba el problema, suelen indicar un trabajo razonado.`)),t}historyView(e,t){if(!e.length)return Q(`p`,`report-text`,`Sin cambios ni avisos: el turno se jugó con las decisiones con que arrancó.`);let n=Q(`table`,`class-table history-table`),r=Q(`tr`);for(let e of[`Hora`,`Qué pasó`,`Antes`,`Después`,`Cómo venía el turno`]){let t=Q(`th`,``,e);t.scope=`col`,r.append(t)}n.append(Q(`thead`),Q(`tbody`)),n.tHead.append(r);for(let r of e){let e=r.kind===`aviso`||r.kind===`pista`,i=Q(`tr`,e?`guide-row`:``),a=r.kind===`aviso`?`Aviso · ${r.label}`:r.label,o=r.context,s=o?[`${o.queue} camiones esperando`,o.onTime===null?null:`${o.onTime} % a tiempo`,`$ ${o.cost.toLocaleString(`es-UY`)}`,o.stockouts.length?`sin stock: ${o.stockouts.join(`, `)}`:null].filter(Boolean).join(` · `):``;i.append(Q(`td`,`crit-cell`,r.time<=t?`8:00 (plan)`:_d(r.time)),Q(`td`,e?`guide-cell`:``,a),Q(`td`,``,r.fromText??``),Q(`td`,``,r.toText??``),Q(`td`,`plan-cell`,s)),n.tBodies[0].append(i)}let i=Q(`div`,`table-scroll`);return i.append(n),i}section(e){let t=Q(`section`,`report-section`);return t.append(Q(`h3`,`report-h`,e)),t}list(e){let t=Q(`ul`,`plain-list`);for(let n of e)t.append(Q(`li`,``,n));return t}chart(e,t){let n=t.history,r=n.map(e=>e.time),{shiftStart:i,shiftEnd:a}=t.params;switch(e.file.chart){case`queue`:return oh({times:r,start:i,end:a,series:[{name:`Camiones esperando`,values:n.map(e=>e.queue)}],format:e=>String(Math.round(e)),label:`Camiones esperando muelle a lo largo del día`});case`stock`:return oh({times:r,start:i,end:a,series:(e.file.watch??[]).map(e=>t.products.findIndex(t=>t.def.name===e)).filter(e=>e>=0).map(e=>({name:t.products[e].def.name,values:n.map(t=>t.stock[e])})),format:e=>`${Math.round(e)} pallets`,label:`Stock de los productos en promoción a lo largo del día`});case`late`:return oh({times:r,start:i,end:a,series:[{name:`Pedidos tarde`,values:n.map(e=>e.late)}],format:e=>String(Math.round(e)),label:`Pedidos despachados tarde, acumulado`});default:return oh({times:r,start:i,end:a,series:[{name:`Costo acumulado`,values:n.map(e=>e.total)}],format:e=>`$ ${Math.round(e/1e3)} mil`,label:`Costo acumulado del turno`})}}classTable(e,t){let n=this.section(`Tabla de la clase`),r=e.file.criteria??xh,i=!!e.file.criteria,a=()=>{let n=Xm(e.file.id),o=(e,t)=>e.metrics[r[t].metric],s=(e,t,n)=>Jp[r[e].metric].better===`lower`?t-n:n-t,c=e=>yh.reduce((t,n)=>t+(e.medals[n]?em[e.medals[n]]:0),0),l=[...n].sort((e,t)=>e.solved===t.solved?this.sortBy===`balanced`?c(t)-c(e)||o(e,`money`)-o(t,`money`):s(this.sortBy,o(e,this.sortBy),o(t,this.sortBy)):e.solved?-1:1),u=n.filter(e=>e.solved||!i),d=new Map,f=(e,t)=>d.set(e,[...d.get(e)??[],t]);if(u.length>1){let t=e=>u.reduce((t,n)=>s(e,o(n,e),o(t,e))<0?n:t);f(t(`money`).id,`La más barata`),f(t(`time`).id,e.file.criteria?`Mejor en ${r.time.label.toLowerCase()}`:`La más rápida`),f(t(`service`).id,`Mejor servicio`),i&&(f(t(`extra`).id,`Mejor en ${r.extra.label.toLowerCase()}`),f(u.reduce((e,t)=>c(t)>c(e)?t:e).id,`La más equilibrada`))}let p=Q(`div`),m=Q(`div`,`sort-bar`);m.append(Q(`span`,`sort-label`,`Ordenar por:`));let h=[...i?[[`balanced`,`Equilibrio`]]:[],...yh.map(e=>[e,r[e].label])];!i&&this.sortBy===`balanced`&&(this.sortBy=`money`);for(let[e,t]of h){let n=Q(`button`,this.sortBy===e?`sort-btn active`:`sort-btn`,t);n.setAttribute(`aria-pressed`,String(this.sortBy===e)),n.addEventListener(`click`,()=>{this.sortBy=e,p.replaceWith(a())}),m.append(n)}p.append(m);let g=Q(`table`,`class-table`),_=Q(`tr`);for(let e of[`#`,`Grupo`,`Hora`,`Metas`,...yh.map(e=>r[e].label),`Pistas`,`Decisiones`]){let t=Q(`th`,``,e);t.scope=`col`,_.append(t)}g.append(Q(`thead`),Q(`tbody`)),g.tHead.append(_),l.forEach((e,n)=>{let a=Q(`tr`,e.id===t?`current`:``),s=Q(`td`,`group-cell`);s.append(document.createTextNode(e.group));for(let t of d.get(e.id)??[])s.append(Q(`span`,`badge`,t));let c=new Date(e.date).toLocaleTimeString(`es-UY`,{hour:`2-digit`,minute:`2-digit`});a.append(Q(`td`,``,String(n+1)),s,Q(`td`,``,c),Q(`td`,e.solved?`ok`:`fail`,i?e.solved?`✓`:`✗`:`—`));for(let t of yh){let n=Q(`td`,`crit-cell`);n.append(document.createTextNode(Zp(r[t].metric,o(e,t)))),e.medals[t]&&n.append(Q(`span`,`medal-dot medal-${e.medals[t]}`,bh[e.medals[t]][0])),a.append(n)}a.append(Q(`td`,`crit-cell`,String(e.clues??0))),a.append(Q(`td`,`plan-cell`,e.plan.join(` · `)||`Sin cambios`)),g.tBodies[0].append(a)});let v=Q(`div`,`table-scroll`);v.append(g),p.append(v);let y=Q(`button`,`link-btn`,`Borrar la tabla de este escenario`);return y.addEventListener(`click`,()=>{y.dataset.confirm?(Qm(e.file.id),p.replaceWith(a())):(y.dataset.confirm=`1`,y.textContent=`¿Seguro? Se borran todos los intentos de este escenario en esta PC. Tocar de nuevo para confirmar.`)}),p.append(Q(`p`,`report-note`,`Los intentos quedan guardados en el navegador de esta PC. Las medallas solo se dan a las soluciones que cumplen todas las metas; con 1 o 2 pistas pedidas, la mejor posible es plata, y con 3 o más, bronce.`),y),p};return n.append(a()),n}},Th=`https://ric20527.github.io/hub-logistico-web/`,Eh=`hub-logistico-sin-internet.html`,Dh=class{cb;el;card;group=$m();running=null;constructor(e){this.cb=e,this.el=Q(`div`,`picker-overlay`),this.el.hidden=!0,this.card=Q(`div`,`picker`),this.card.setAttribute(`role`,`dialog`),this.card.setAttribute(`aria-modal`,`true`),this.el.append(this.card),this.el.addEventListener(`keydown`,e=>{e.key===`Escape`&&this.running&&this.close()})}get open(){return!this.el.hidden}get groupName(){return this.group}setRunning(e){this.running=e}close(){this.el.hidden=!0}showList(){let e=this.card;e.replaceChildren(),e.setAttribute(`aria-label`,`Elegir un escenario`);let t=Q(`header`,`picker-head`),n=Q(`div`);n.append(Q(`div`,`report-kicker`,`Hub Logístico`),Q(`h2`,`report-title`,`Elegir un escenario`)),t.append(n),this.running&&t.append(this.closeButton()),e.append(t);let r=Q(`label`,`group-row`);r.append(Q(`span`,`group-label`,`Nombre del grupo o del estudiante`));let i=Q(`input`,`group-input`);i.type=`text`,i.maxLength=40,i.placeholder=`Por ejemplo: Grupo 3`,i.value=this.group,i.addEventListener(`input`,()=>{this.group=i.value.trim(),eh(this.group)}),r.append(i),e.append(r,Q(`p`,`report-note`,`El nombre aparece en el reporte y en la tabla de la clase, para comparar las soluciones de cada grupo.`));let a=Q(`div`,`scenario-grid`);for(let e of ie){let t=Q(`button`,e.goals.length?`scenario-card`:`scenario-card free`),n=Xm(e.id),r=n.filter(e=>e.solved).length;t.append(Q(`span`,`scenario-order`,e.goals.length?`Escenario ${e.order}`:`Para explorar`),Q(`span`,`scenario-name`,e.title),Q(`span`,`scenario-sub`,e.subtitle));let i=Q(`span`,`scenario-chips`);for(let t of e.courses)i.append(Q(`span`,`tag`,t));t.append(i);let o=(e,t,n)=>`${e} ${e===1?t:n}`;if(n.length){let i=`En esta PC: ${o(n.length,`intento`,`intentos`)}${e.goals.length?`, ${o(r,`resuelto`,`resueltos`)}`:``}`;t.append(Q(`span`,`scenario-tries`,i))}t.addEventListener(`click`,()=>this.showBriefing(e,!1)),a.append(t)}e.append(a);let o=Q(`footer`,`picker-foot`);if(location.protocol!==`file:`){let e=Q(`a`,`foot-link`,`Descargar la versión sin internet`);e.href=Eh,e.download=Eh,e.title=`Un solo archivo que se abre con doble clic, sin conexión`,o.append(e)}let s=Q(`button`,`foot-link`,`Para docentes`);s.addEventListener(`click`,()=>this.cb.onTeacher()),o.append(s),e.append(o),this.el.hidden=!1,i.focus()}showBriefing(e,t){let n=this.card;n.replaceChildren(),n.setAttribute(`aria-label`,e.title);let r=Q(`header`,`picker-head`),i=Q(`div`);i.append(Q(`div`,`report-kicker`,e.goals.length?`Escenario ${e.order}`:`Turno libre`),Q(`h2`,`report-title`,e.title)),r.append(i),t&&r.append(this.closeButton()),n.append(r);let a=Q(`div`,`briefing`);if(a.append(this.block(`La situación`,e.story),this.block(`El problema`,e.problem)),e.goals.length){let t=this.block(`Metas`),n=Q(`ul`,`goal-list`);for(let t of e.goals){let e=Q(`li`);e.append(Q(`span`,`goal-icon`,`◎`),Q(`span`,`goal-text`,t.text)),n.append(e)}t.append(n),a.append(t)}let o=e.editable===`all`?null:e.editable,s=this.block(`Qué se puede decidir`,o?void 0:`Todas las decisiones del panel.`);if(o){let e=Q(`ul`,`plain-list`);for(let t of o)e.append(Q(`li`,``,wm[t]));s.append(e,Q(`p`,`report-note`,`El resto de las decisiones queda fijo en este escenario.`))}if(a.append(s),e.criteria){let t=this.block(`Cómo se clasifican las soluciones`,`Hay varias maneras de resolverlo. Cada solución que cumple las metas recibe una medalla de oro, plata o bronce en cada criterio:`),n=Q(`ul`,`plain-list`);for(let t of Object.values(e.criteria))n.append(Q(`li`,``,`${t.label}: ${Jp[t.metric].label.toLowerCase()}`));t.append(n),a.append(t)}a.append(this.block(`Cómo se juega`,`El reloj arranca en pausa a las 8:00 para planificar: ajustar las decisiones en el panel de la derecha y apretar ▶ (o la barra espaciadora). Las decisiones se pueden corregir durante el turno. Al llegar a las 18:00, o con el botón "Terminar", aparece el reporte.`)),n.append(a);let c=Q(`footer`,`report-actions`);if(t){let t=Q(`button`,`report-btn primary`,`Seguir con el turno`);t.addEventListener(`click`,()=>this.close());let r=Q(`button`,`report-btn`,`Empezar de nuevo este escenario`);r.addEventListener(`click`,()=>{this.close(),this.cb.onStart(e,this.group)});let i=Q(`button`,`report-btn`,`Cambiar de escenario`);i.addEventListener(`click`,()=>this.showList()),c.append(t,r,i),n.append(c),this.el.hidden=!1,t.focus();return}let l=Q(`button`,`report-btn primary`,`Empezar a planificar`);l.addEventListener(`click`,()=>{this.close(),this.cb.onStart(e,this.group)});let u=Q(`button`,`report-btn`,`Volver a los escenarios`);u.addEventListener(`click`,()=>this.showList()),c.append(l,u),n.append(c),this.el.hidden=!1,l.focus()}block(e,t){let n=Q(`section`,`report-section`);return n.append(Q(`h3`,`report-h`,e)),t&&n.append(Q(`p`,`report-text`,t)),n}closeButton(){let e=Q(`button`,`close-btn report-close`,`✕`);return e.setAttribute(`aria-label`,`Cerrar y volver al hub`),e.addEventListener(`click`,()=>this.close()),e}},Oh=`a35986c5`,kh=`hub-logistico:docente`;function Ah(e){let t=2166136261,n=`hub-logistico/docentes/${e.trim()}`;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619)>>>0;return t.toString(16).padStart(8,`0`)}function jh(){try{return sessionStorage.getItem(kh)===`1`}catch{return!1}}function Mh(){try{sessionStorage.setItem(kh,`1`)}catch{}}var Nh=[`money`,`time`,`service`,`extra`],Ph={oro:`O`,plata:`P`,bronce:`B`},Fh=e=>{let[t,n]=e.split(`:`).map(Number);return t*3600+(n||0)*60};function Ih(e,t){let n=Yp(e),r={...n.decisions,...structuredClone(t.decisions)},i=new qp(n.params,r,n.products),a=(t.changes??[]).map(e=>({at:Fh(e.at),set:e.set,done:!1}));for(;!i.finished;){for(let e of a)if(!(e.done||i.time<e.at)){for(let[t,n]of Object.entries(e.set))i.setDecision(t,n);e.done=!0}i.advance(300)}let o=Xp(i),s=e.goals.every(e=>Qp(e,o));return{m:o,solved:s,medals:Nh.map(t=>s&&e.criteria?$p(e.criteria[t],o):null)}}var Lh=class{el;card;cache=new Map;constructor(){this.el=Q(`div`,`report-overlay teacher-overlay`),this.el.hidden=!0,this.card=Q(`div`,`report teacher-guide`),this.card.setAttribute(`role`,`dialog`),this.card.setAttribute(`aria-modal`,`true`),this.el.append(this.card),this.el.addEventListener(`keydown`,e=>{e.key===`Escape`&&this.close()})}get open(){return!this.el.hidden}close(){this.el.hidden=!0}show(){jh()?this.showGuide(`general`):this.showLogin()}head(e,t){let n=Q(`header`,`report-head`),r=Q(`div`);r.append(Q(`div`,`report-kicker`,t),Q(`h2`,`report-title`,e));let i=Q(`button`,`close-btn report-close`,`✕`);return i.setAttribute(`aria-label`,`Cerrar la guía`),i.addEventListener(`click`,()=>this.close()),n.append(r,i),n}showLogin(){let e=this.card;e.replaceChildren(this.head(`Acceso para docentes`,`Hub Logístico`)),e.setAttribute(`aria-label`,`Acceso para docentes`);let t=Q(`form`,`teacher-login`),n=Q(`label`,`group-row`);n.append(Q(`span`,`group-label`,`Código de docente`));let r=Q(`input`,`group-input`);r.type=`password`,r.autocomplete=`off`,r.inputMode=`numeric`,n.append(r);let i=Q(`p`,`login-error`);i.setAttribute(`role`,`alert`);let a=Q(`button`,`report-btn primary`,`Entrar`);a.type=`submit`,t.append(n,i,a),t.addEventListener(`submit`,e=>{e.preventDefault(),Ah(r.value)===Oh?(Mh(),this.showGuide(`general`)):(i.textContent=`El código no es correcto.`,r.select())}),e.append(Q(`p`,`report-note`,`La guía tiene las soluciones de los escenarios, por eso está separada de lo que ven los estudiantes.`),t),this.el.hidden=!1,r.focus()}showGuide(e){let t=this.card;t.setAttribute(`aria-label`,`Guía docente`),t.replaceChildren(this.head(`Guía docente`,`Hub Logístico · para docentes`));let n=Q(`div`,`sort-bar guide-tabs`),r=ie.filter(e=>e.teacher),i=[[`general`,`Guía general`],...r.map(e=>[e.id,e.title])];for(let[t,r]of i){let i=Q(`button`,t===e?`sort-btn active`:`sort-btn`,r);i.setAttribute(`aria-pressed`,String(t===e)),i.addEventListener(`click`,()=>this.showGuide(t)),n.append(i)}t.append(n);let a=r.find(t=>t.id===e);t.append(a?this.scenarioGuide(a):this.generalGuide());let o=Q(`footer`,`report-actions`),s=Q(`button`,`report-btn`,`Imprimir o guardar en PDF`);s.addEventListener(`click`,()=>window.print());let c=Q(`button`,`report-btn`,`Cerrar`);c.addEventListener(`click`,()=>this.close()),o.append(s,c),t.append(o),this.el.hidden=!1,this.el.scrollTop=0,n.querySelector(`.active`).focus({preventScroll:!0})}section(e,...t){let n=Q(`section`,`report-section`);n.append(Q(`h3`,`report-h`,e));for(let e of t)n.append(typeof e==`string`?Q(`p`,`report-text`,e):e);return n}exportButtons(){let e=Q(`div`,`export-row`),t=Q(`p`,`report-note`),n=()=>{let e=Ym().length;t.textContent=e?`Hay ${e} ${e===1?`intento guardado`:`intentos guardados`} en esta PC (todos los escenarios). Las planillas se abren con Excel.`:`Todavía no hay intentos guardados en esta PC.`},r=Q(`button`,`report-btn`,`Descargar el resumen de intentos`);r.addEventListener(`click`,()=>_h(vh(`resumen-de-intentos`),hh(Ym())));let i=Q(`button`,`report-btn`,`Descargar el historial de decisiones`);i.addEventListener(`click`,()=>_h(vh(`historial-de-decisiones`),gh(Ym()))),n(),e.append(r,i);let a=Q(`div`);return a.append(e,t),a}list(e,t=!1){let n=Q(t?`ol`:`ul`,t?`question-list`:`plain-list`);for(let t of e)n.append(Q(`li`,``,t));return n}generalGuide(){let e=Q(`div`),t=e=>`$ ${e.toLocaleString(`es-UY`)}`;return e.append(this.section(`Qué es`,`Un simulador de un centro de distribución para usar en distintas asignaturas de la carrera. Los estudiantes toman decisiones (recursos, compras, métodos de trabajo) y ven sus efectos en un turno de 8:00 a 18:00 que a velocidad normal dura unos 10 minutos. Hay un turno libre para explorar y tres escenarios con un problema, metas y varias maneras de resolverlo.`),this.section(`Cómo abrirlo`,this.list([`Con internet: ${Th} (cualquier navegador actual: Chrome, Edge o Firefox).`,`Sin internet: el archivo «${Eh}» se abre con doble clic y funciona sin conexión. Se puede copiar a cada PC con un pendrive. Se descarga desde la página web, con el enlace «Descargar la versión sin internet» al pie de la pantalla de inicio.`,`Con proyector: la pantalla completa (botón de arriba a la derecha) da más lugar al hub.`])),this.section(`Una clase típica (45 a 60 minutos)`,this.list([`Formar grupos de 2 a 4 estudiantes por PC. Cada grupo escribe su nombre en la pantalla de inicio.`,`Presentar el escenario en voz alta (la presentación de cada escenario sirve de consigna) y pedir una hipótesis antes de jugar.`,`Planificar con el reloj en pausa. Jugar a ×1 al menos la primera hora para que vean el problema; después se puede acelerar (×5) o terminar con la bandera.`,`Leer el reporte: metas, medallas, «Qué pasó» y el concepto.`,`Repetir con otra estrategia: la tabla de la clase guarda todos los intentos y marca la más barata, la más rápida y la más equilibrada.`,`Cerrar con la puesta en común: no hay una sola respuesta correcta, depende de qué se priorice.`],!0)),this.section(`La tabla de la clase`,`Queda guardada en el navegador de cada PC (el hub no tiene servidor). Para comparar entre grupos: proyectar una PC donde jueguen todos por turnos, o pedir que cada grupo informe su resultado. Se borra desde el reporte («Borrar la tabla de este escenario»).`),this.section(`Medallas y criterios`,`Cada escenario tiene metas mínimas. Si una solución las cumple todas, recibe una medalla (oro, plata o bronce) en cuatro criterios: dinero, tiempo, servicio y uno propio del escenario (recursos, inventario o personal). Una solución puede ser oro en dinero y bronce en tiempo: eso es lo que da lugar a la discusión.`),this.section(`Registro de decisiones y planillas`,`Cada intento guarda su historial: cada decisión cambiada (al planificar o con el turno en marcha) con su valor anterior y el nuevo, la hora del turno y cómo venía (camiones esperando, pedidos a tiempo, costo, productos sin stock), más los avisos y las pistas. El reporte lo muestra junto con un resumen de cómo trabajó el grupo.`,this.list([`Indicios de un trabajo razonado: pocos intentos; cambios puntuales, hechos cuando un indicador mostraba el problema o después de leer un aviso; pocos cambios deshechos.`,`Indicios de ensayo y error: muchos reinicios sin terminar; muchos cambios seguidos de la misma decisión; cambios que se deshacen; todo al máximo o todo al mínimo.`,`Son indicios, no un veredicto: lo mejor es pedirle al grupo que explique cada cambio con el historial a la vista.`]),this.exportButtons()),this.section(`Guía durante el turno`,this.list([`Recorrido de bienvenida: la primera vez que se empieza un escenario en una PC, la pantalla se oscurece y se explica cada parte (reloj, decisiones, indicadores, notificaciones, pistas). Se repite desde la ayuda (botón ?).`,`Avisos automáticos (con una lamparita): señalan qué está pasando y resaltan dónde mirar, o hacen una pregunta; nunca dicen qué decidir. Solo tratan temas que se pueden decidir en el escenario, salen como mucho 6 por turno y, a velocidad ×1, detienen el reloj hasta que se cierran. Son gratis.`,`Pistas a pedido (botón «Pista»): van de la más general a la más concreta, sin llegar a la solución. En los escenarios con metas tienen un costo: con 1 o 2 pistas, la mejor medalla posible es plata; con 3 o más, bronce. Las metas se evalúan igual. La tabla de la clase muestra cuántas pidió cada grupo.`,`Las pistas pedidas se mantienen al reiniciar o repetir el escenario (lo leído no se olvida) y vuelven a cero al elegir otro escenario. Los textos de las pistas de cada escenario se ven en su pestaña de esta guía.`])),this.section(`Costos de referencia (pesos uruguayos)`,this.list([`Montacargas con operador: ${t(Td.forkliftHour)} por hora.`,`Preparador: ${t(Td.pickerHour)} por hora.`,`Muelle habilitado: ${t(Td.dockHour)} por hora.`,`Estadía de un camión esperando: ${t(Td.truckWaitHour)} por hora.`,`Pedido entregado tarde: ${t(Td.lateOrder)}.`,`Pallet guardado: ${t(Td.palletDay)} por día.`,`Recargo por compra expresa: ${t(Td.expressPurchase)}.`]),`Son valores de referencia para comparar decisiones; se pueden ajustar en el proyecto (src/sim/params.ts).`),this.section(`Cambiar o crear escenarios`,`Cada escenario es un archivo de texto en la carpeta src/scenarios del proyecto. Ahí se pueden cambiar los textos, las metas, las medallas, la demanda de cada producto, las demoras de los proveedores, las decisiones iniciales y cuáles se pueden tocar. Para crear uno nuevo se copia un archivo, se le cambia el nombre y los textos y se lo suma a la lista (src/scenarios/index.ts). Después hay que volver a publicar (ver el README del proyecto).`),this.section(`Límites del modelo`,this.list([`Los vehículos y las personas se mueven más lento que en la realidad para que se los pueda seguir en pantalla; los tiempos de cada tarea sí son realistas.`,`Los vehículos no se esquivan entre sí: a veces se cruzan por encima.`,`El azar tiene semilla (${Ed.seed}): con las mismas decisiones, el día se repite igual. Sirve para comparar decisiones de forma justa; no es un pronóstico exacto de un hub real.`]))),e}scenarioGuide(e){let t=e.teacher,n=Q(`div`);n.append(this.section(`Objetivo de aprendizaje`,t.objective),this.section(`Asignaturas`,e.courses.join(` · `)),this.section(`Duración sugerida`,t.duration),this.section(`Preparación`,t.preparation),this.section(`Desarrollo`,this.list(t.steps,!0)),this.section(`Metas del escenario`,this.list(e.goals.map(e=>e.text))),this.solutions(e),...e.clues?.length?[this.section(`Pistas que se pueden pedir`,this.list(e.clues,!0))]:[],this.section(`Errores típicos`,this.list(t.mistakes)));let r=Q(`div`,`qa-list`);for(let e of t.discussion){let t=Q(`div`,`qa`);t.append(Q(`p`,`qa-q`,e.question),Q(`p`,`qa-a`,e.answer)),r.append(t)}return n.append(this.section(`Preguntas para la discusión y respuestas esperadas`,r),this.section(`Variantes`,this.list(t.variants))),n}solutions(e){let t=this.cache.get(e.id);if(t)return t;let n=e.criteria,r=this.section(`Soluciones de referencia`);r.append(Q(`p`,`report-note`,`Calculadas recién con el simulador, con la misma semilla que usan los estudiantes. O, P y B: medalla de oro, plata o bronce (solo si se cumplen todas las metas).`));let i=Q(`table`,`class-table`),a=Q(`tr`);for(let e of[`Solución`,`Metas`,...Nh.map(e=>n[e].label)]){let t=Q(`th`,``,e);t.scope=`col`,a.append(t)}i.append(Q(`thead`),Q(`tbody`)),i.tHead.append(a);let o=Q(`div`,`table-scroll`);o.append(i);let s=Q(`p`,`report-note`,`Calculando…`);r.append(o,s);let c=e.teacher.solutions,l=0,u=()=>{if(l>=c.length){s.textContent=`${c.length} soluciones calculadas.`;return}let t=c[l++],r=Ih(e,t),a=Q(`tr`);a.append(Q(`td`,`plan-cell solution-cell`,t.label),Q(`td`,r.solved?`ok`:`fail`,r.solved?`✓`:`✗`)),Nh.forEach((e,t)=>{let i=Q(`td`,`crit-cell`);i.append(document.createTextNode(Zp(n[e].metric,r.m[n[e].metric])));let o=r.medals[t];o&&i.append(Q(`span`,`medal-dot medal-${o}`,Ph[o])),a.append(i)}),i.tBodies[0].append(a),s.textContent=`Calculando… (${l} de ${c.length})`,setTimeout(u,30)};return setTimeout(u,30),this.cache.set(e.id,r),r}},Rh=`hub-logistico:recorrido-visto`,zh=14,Bh=12;function Vh(){try{return localStorage.getItem(Rh)===`1`}catch{return!1}}function Hh(){try{localStorage.setItem(Rh,`1`)}catch{}}var Uh=class{el;hole;bubble;steps=[];index=0;onStep=()=>{};onClose=()=>{};constructor(){this.el=Q(`div`,`tour`),this.el.hidden=!0,this.hole=Q(`div`,`tour-hole`),this.bubble=Q(`div`,`tour-bubble`),this.bubble.setAttribute(`role`,`dialog`),this.bubble.setAttribute(`aria-modal`,`true`),this.el.append(this.hole,this.bubble),window.addEventListener(`resize`,()=>{this.open&&this.place()}),window.addEventListener(`keydown`,e=>{if(this.open){if(e.key===`Escape`)this.close();else if(e.key===`ArrowRight`||e.key===`Enter`)this.go(this.index+1);else if(e.key===`ArrowLeft`)this.go(this.index-1);else return;e.preventDefault(),e.stopPropagation()}},!0)}get open(){return!this.el.hidden}start(e){this.steps=e,this.el.hidden=!1,this.go(0)}close(){this.open&&(this.el.hidden=!0,Hh(),this.onClose())}go(e){if(e<0)return;if(e>=this.steps.length){this.close();return}this.index=e;let t=this.steps[e];this.onStep(t);let n=e===this.steps.length-1,r=this.bubble;r.replaceChildren(),r.setAttribute(`aria-label`,t.title),r.append(Q(`div`,`tour-count`,`${e+1} de ${this.steps.length}`),Q(`h3`,`tour-title`,t.title),Q(`p`,`tour-text`,t.text));let i=Q(`div`,`tour-actions`),a=Q(`button`,`tour-skip`,`Saltar recorrido`);a.addEventListener(`click`,()=>this.close()),a.style.visibility=n?`hidden`:``;let o=Q(`div`,`tour-nav`);if(e>0){let t=Q(`button`,`report-btn`,`Anterior`);t.addEventListener(`click`,()=>this.go(e-1)),o.append(t)}let s=Q(`button`,`report-btn primary`,n?`Empezar`:`Siguiente`);s.addEventListener(`click`,()=>this.go(e+1)),o.append(s),i.append(a,o),r.append(i),this.place(),s.focus({preventScroll:!0})}place(){let e=this.steps[this.index],t=(e.target?document.querySelector(e.target):null)?.getBoundingClientRect(),n=t&&t.width>0&&t.height>0?t:null,r=this.bubble,i=window.innerWidth,a=window.innerHeight;if(this.el.classList.toggle(`dim`,!n),this.hole.hidden=!n,!n){r.style.left=`${Math.max(Bh,(i-r.offsetWidth)/2)}px`,r.style.top=`${Math.max(Bh,(a-r.offsetHeight)/2)}px`;return}Object.assign(this.hole.style,{left:`${n.left-6}px`,top:`${n.top-6}px`,width:`${n.width+12}px`,height:`${n.height+12}px`});let o=r.offsetWidth,s=r.offsetHeight,c=e=>Math.min(i-o-Bh,Math.max(Bh,e)),l=e=>Math.min(a-s-Bh,Math.max(Bh,e)),u=n.left+n.width/2,d=n.top+n.height/2,f=[{fits:n.bottom+6+zh+s<=a-Bh,x:c(u-o/2),y:n.bottom+6+zh},{fits:n.top-6-zh-s>=Bh,x:c(u-o/2),y:n.top-6-zh-s},{fits:n.left-6-zh-o>=Bh,x:n.left-6-zh-o,y:l(d-s/2)},{fits:n.right+6+zh+o<=i-Bh,x:n.right+6+zh,y:l(d-s/2)}].find(e=>e.fits)??{x:(i-o)/2,y:(a-s)/2};r.style.left=`${f.x}px`,r.style.top=`${f.y}px`}},Wh=document.getElementById(`app`),Gh=document.createElement(`div`);Gh.className=`viewport`,Wh.append(Gh);var Kh=new Vf(Gh),qh=new df,Jh=td(Kh.scene,qh),Yh=dd(Kh.scene,qh);$u(Kh.scene,qh),Ju(Kh.scene,qh),Fu(Kh.scene),Kh.bakeShadows();var Xh=new uf(Kh,qh),Zh=Yp(ae),Qh=structuredClone(Zh.decisions),$,$h=null,eg,tg=1,ng=!0,rg=!1,ig,ag=0,og=null,sg=new Vm(Wh,mf,{onView:e=>{Kh.flyTo(e),sg.setActiveView(e.id)},onCloseInfo:()=>{og=null,Xh.select(null)},onTogglePause:()=>{$.finished||(ng=!ng),xg()},onSpeed:e=>{tg=e,xg()},onRestart:()=>{$.time>$.params.shiftStart&&!$.finished&&ag++,vg()},onScenario:()=>dg.showBriefing(Zh.file,!0),onFinish:()=>yg(),onClue:()=>pg.requestClue(),onTour:()=>fg.start(T)}),cg=new Cm(e=>{Xh.select(null),og=e,sg.showInfo(M[e],wg(e))});sg.mountDashboard(cg.el);var lg=new wh({onRepeat:()=>vg(),onChooseScenario:()=>dg.showList()}),ug=new Lh,dg=new Dh({onStart:e=>mg(e),onTeacher:()=>ug.show()});sg.mountOverlay(lg.el),sg.mountOverlay(dg.el),sg.mountOverlay(ug.el);var fg=new Uh,pg=new gm({sim:()=>$,scenario:()=>Zh,paused:()=>ng,speed:()=>tg,blocked:()=>lg.open||dg.open||ug.open||fg.open,pause:()=>{ng=!0,xg()},resume:()=>{$.finished||(ng=!1),xg()},look:e=>{let t=mf.find(t=>t.id===e);t&&(Kh.flyTo(t),sg.setActiveView(t.id))},showTab:e=>sg.showTab(e)});pg.onCluesChange=e=>sg.setClues(e),pg.onGuide=(e,t)=>ig.guide($,e,t),fg.onStep=e=>{e.target===`.side-panel`&&sg.showTab(`decisiones`)},fg.onClose=()=>pg.touch(),sg.mountOverlay(pg.el),sg.mountOverlay(fg.el),sg.keysBlocked=()=>lg.open||dg.open||ug.open||fg.open,Xh.onSelect=e=>{e&&(og=null),(e||!og)&&sg.showInfo(e?.info??null,e?.live?.())},Xh.onFocus=e=>{Kh.flyTo(gf(ff(e),Kh.camera,Kh.controls.target),.9),sg.setActiveView(null)},Kh.controls.addEventListener(`start`,()=>sg.setActiveView(null));function mg(e){Zh=Yp(e),Qh=structuredClone(Zh.decisions),sg.setScenario(e.title),dg.setRunning(e),pg.resetScenario(),ag=0,hg(),vg(),Vh()||fg.start(T)}function hg(){let e=Kp(Zh.products);eg=new Lm({products:Zh.products.map((t,n)=>({name:t.name,abc:e[n]})),limits:wd,costs:Td,editable:Zh.editable},Qh,(e,t)=>{ig.change($,e,Qh[e],t,gg()),Qh[e]=t,pg.touch(),gg()?_g():$.setDecision(e,t)},()=>{for(let e of Object.keys(Zh.decisions)){let t=structuredClone(Zh.decisions[e]);ig.change($,e,Qh[e],t,gg()),Qh[e]=t,gg()||$.setDecision(e,structuredClone(t))}gg()&&_g(),eg.setValues(Qh)}),sg.mountDecisions(eg.el),sg.showTab(`decisiones`)}function gg(){return $.time<=$.params.shiftStart}function _g(){$h?.dispose(),$=new qp(Zh.params,Qh,Zh.products),$h=new af(Kh,$,qh,{doors:Yh,barriers:Jh}),$.onEvent(e=>sg.notify(e.text,_d(e.time),e.kind))}function vg(){_g(),ng=!0,rg=!1,pg.resetShift(),ig=new Mm(structuredClone(Qh),Zh.products.map(e=>e.name)),lg.close(),sg.clearNotifications();let e=_d($.time),t=Zh.file.goals.length?` Las metas están en el botón del escenario, arriba a la izquierda.`:``;sg.notify(`${Zh.file.title}: el reloj está en pausa para planificar. Ajustar las decisiones del panel y apretar ▶ (o la barra espaciadora) para empezar.${t}`,e),sg.notify(`Con un clic en un camión, un montacargas, un preparador o un indicador se ve qué está pasando.`,e);let n=Xh.current;n?sg.showInfo(n.info,n.live?.()):og&&sg.showInfo(M[og],wg(og)),sg.showTab(`decisiones`),Cg(),xg()}function yg(){$.finished||($.advance($.params.shiftEnd-$.time+1),$h.sync(0),bg())}function bg(){$.finished&&!rg&&(rg=!0,ng=!0,xg(),Cg(),pg.close(),lg.show(Zh,$,dg.groupName,{clues:pg.clues,history:ig,restarts:ag}),ag=0)}function xg(){sg.setClock(_d($.time),$.progress,{paused:ng,speed:tg,finished:$.finished})}var Sg=e=>`$ ${Math.round(e).toLocaleString(`es-UY`)}`;function Cg(){let e=$.stats;cg.update({queue:$.queueLength,avgWait:$.averageWait,stockouts:$.stockedOut.map(e=>e.def.name),ordersWaitingStock:$.ordersWaitingStock,shipped:e.ordersShipped,onTime:e.ordersOnTime,utilization:{docks:$.dockUtilization,forklifts:$.forkliftUtilization,pickers:$.pickerUtilization},cost:$.totalCost,costHistory:[...$.history,{time:$.time,total:$.totalCost}],shiftStart:$.params.shiftStart,shiftEnd:$.params.shiftEnd,occupied:$.storage.occupied,capacity:$.storage.capacity}),eg.setStock($.products.map(e=>({stock:$.physicalStock(e.index),onOrder:$.onOrder(e.index),out:e.stockoutSince!==null})))}function wg(e){let t=$.stats,n=$.costs;switch(e){case`espera`:return[{label:`Camiones en la playa ahora`,value:String($.queueLength)},{label:`Espera promedio`,value:vd($.averageWait)},{label:`Espera más larga`,value:vd(t.maxWait)},{label:`Cola más larga del día`,value:String(t.queueMax)},{label:`Camiones que llegaron`,value:String(t.trucksArrived)},{label:`Costo de estadía`,value:Sg(n.waiting)}];case`quiebres`:{let e=[{label:`Productos sin stock ahora`,value:$.stockedOut.map(e=>e.def.name).join(`, `)||`Ninguno`},{label:`Pedidos esperando mercadería`,value:String($.ordersWaitingStock)},{label:`Compras a proveedores hoy`,value:t.expressPurchases?`${t.purchases} (${t.expressPurchases} expresas)`:String(t.purchases)}];for(let t of $.products){let n=t.stockoutTime+(t.stockoutSince===null?0:$.time-t.stockoutSince);n>0&&e.push({label:`Tiempo sin ${t.def.name}`,value:vd(n)})}return e}case`a-tiempo`:return[{label:`Pedidos despachados`,value:String(t.ordersShipped)},{label:`A tiempo`,value:String(t.ordersOnTime)},{label:`Tarde`,value:String(t.ordersShipped-t.ordersOnTime)},{label:`Salidas atrasadas`,value:`${t.departures-t.departuresOnTime} de ${t.departures}`},{label:`Costo de multas`,value:Sg(n.late)}];case`utilizacion`:return[{label:`Muelles (${$.decisions.receivingDocks+$.decisions.shippingDocks} habilitados)`,value:yd($.dockUtilization)},{label:`Montacargas (${$.activeForklifts} en servicio)`,value:yd($.forkliftUtilization)},{label:`Preparadores (${$.decisions.pickers} en servicio)`,value:yd($.pickerUtilization)},{label:`Descarga frenada por falta de lugar`,value:vd(t.unloadBlocked)},{label:`Preparadores esperando reposición`,value:vd(t.pickerBlocked)}];case`costo`:{let e=[{label:`Montacargas`,value:Sg(n.forklifts)},{label:`Preparadores`,value:Sg(n.pickers)},{label:`Muelles`,value:Sg(n.docks)},{label:`Estadía de camiones`,value:Sg(n.waiting)},{label:`Multas por pedidos tarde`,value:Sg(n.late)},{label:`Almacenamiento`,value:Sg(n.storage)}];return n.express&&e.push({label:`Recargo de compras expresas`,value:Sg(n.express)}),e.push({label:`Total`,value:Sg($.totalCost)},{label:`Por pedido despachado`,value:t.ordersShipped?Sg($.totalCost/t.ordersShipped):`—`}),e}case`ocupacion`:{let e={A:0,B:0,C:0};for(let t of $.products)e[t.abc]+=$.storage.byProduct[t.index];return[{label:`Posiciones ocupadas`,value:`${$.storage.occupied} de ${c.length*l}`},{label:`Pallets de productos A`,value:String(e.A)},{label:`Pallets de productos B`,value:String(e.B)},{label:`Pallets de productos C`,value:String(e.C)},{label:`Costo de almacenamiento`,value:Sg(n.storage)}]}}}sg.setScenario(Zh.file.title),hg(),vg(),dg.showList();var Tg=0;Kh.onUpdate(e=>{if(!ng&&!$.finished&&$.advance(e*$.params.timeScale*tg),$h.sync(e),bg(),Tg+=e,Tg>=.25){Tg=0,xg(),Cg(),pg.update();let e=Xh.current;e?.live?sg.updateFacts(e.live()):!e&&og&&sg.updateFacts(wg(og))}}),Kh.setView(hf),sg.setActiveView(hf.id),Kh.start(),requestAnimationFrame(()=>requestAnimationFrame(()=>{let e=document.getElementById(`loader`);e?.classList.add(`done`),setTimeout(()=>e?.remove(),500)}));