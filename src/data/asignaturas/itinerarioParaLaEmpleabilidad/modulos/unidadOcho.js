/**
 * Datos del módulo Unidad Ocho perteneciente a la asignatura de ITP.
 * Incluye información del módulo y sus preguntas asociadas para el quiz.
 *
 * @type {Object}
 * @property {number} id - Identificador único del módulo
 * @property {string} nombre - Nombre del módulo
 * @property {boolean} esExamen - Indica si el módulo es un examen
 * @property {number} asignaturaId - ID de la asignatura a la que pertenece
 * @property {string} descripcion - Breve descripción del contenido del módulo
 * @property {Array<Object>} preguntas - Lista de preguntas para el quiz de este módulo
 */
export const moduloUnidadOcho = {
    id: 611,
    nombre: "Test Unidad 8",
    esExamen: false,
    asignaturaId: 6,
    descripcion: "Seguridad Social: estructura, principios, prestaciones y protección social en el sistema español.",
    preguntas: [
      {
        id: 11001,
        moduloId: 611,
        pregunta: "¿Cuál es el objetivo principal de la Seguridad Social en España?",
        opciones: [
          "Recaudar impuestos impuestos como el de la renta de las personas físicas",
          "Organizar la financiación de servicios públicos como obras públicas o concesiones",
          "Financiar las excedencias de los trabajadores",
          "Proteger a los ciudadanos frente a situaciones de necesidad económica"
        ],
        respuestaCorrecta: 3,
        explicacion: "El objetivo principal de la Seguridad Social en España es proteger a los ciudadanos frente a situaciones de necesidad económica. Esta finalidad está consagrada en el artículo 41 de la Constitución Española, que establece que 'los poderes públicos mantendrán un régimen público de Seguridad Social para todos los ciudadanos que garantice la asistencia y prestaciones sociales suficientes ante situaciones de necesidad'. La Seguridad Social constituye un sistema de protección que cubre contingencias como enfermedad, desempleo, vejez, invalidez o cargas familiares, proporcionando prestaciones económicas y asistenciales. No tiene como objetivo principal recaudar impuestos como el IRPF (competencia de la Agencia Tributaria), ni organizar la financiación de servicios públicos como obras o concesiones, ni específicamente financiar excedencias laborales (aunque puede otorgar prestaciones durante ciertas suspensiones de contrato). Su finalidad esencial es garantizar un sistema de protección social que ampare a los ciudadanos en situaciones de necesidad."
      },
      {
        id: 11002,
        moduloId: 611,
        pregunta: "¿Cuál es la principal fuente de financiación de la Seguridad Social?",
        opciones: [
          "Contribuciones especiales",
          "Tasas",
          "Impuestos",
          "Cotizaciones sociales"
        ],
        respuestaCorrecta: 3,
        explicacion: "Las cotizaciones sociales constituyen la principal fuente de financiación de la Seguridad Social. Estas cotizaciones son aportaciones obligatorias que realizan empresarios y trabajadores para financiar el sistema de protección social. Según establece la Ley General de la Seguridad Social, las cotizaciones son recursos económicos fundamentales del sistema, junto con aportaciones del Estado y otros ingresos. En términos cuantitativos, las cotizaciones sociales representan aproximadamente el 80% de los ingresos del sistema, lo que demuestra su papel predominante en la financiación. A diferencia de los impuestos, que son tributos sin contraprestación directa y financian gastos públicos generales, las cotizaciones tienen carácter finalista, destinándose específicamente a financiar prestaciones de la Seguridad Social. No son contribuciones especiales (tributos vinculados a obras públicas o servicios) ni tasas (pagos por uso privativo de dominio público o prestación de servicios administrativos). El sistema se complementa con transferencias del Estado vía impuestos, pero las cotizaciones siguen siendo su pilar financiero fundamental."
      },
      {
        id: 11003,
        moduloId: 611,
        pregunta: "¿Qué tipo de prestación requiere haber cotizado previamente?",
        opciones: [
          "Prestación no contributiva",
          "Subsidio extraordinario",
          "Ayuda a domicilio",
          "Prestación contributiva"
        ],
        respuestaCorrecta: 3,
        explicacion: "La prestación contributiva es la que requiere haber cotizado previamente. Este tipo de prestaciones se caracteriza por exigir un período mínimo de cotización (también llamado período de carencia) como requisito esencial para su concesión. El importe de estas prestaciones suele estar vinculado a las cotizaciones realizadas, tanto en su cuantía como en su duración. Ejemplos típicos son la prestación por desempleo contributiva (que requiere al menos 360 días cotizados en los últimos 6 años), la pensión de jubilación contributiva (que exige un mínimo de 15 años cotizados) o la prestación por incapacidad temporal (que requiere 180 días cotizados en los últimos 5 años para enfermedad común). Por el contrario, las prestaciones no contributivas están dirigidas a personas sin recursos suficientes que no han cotizado o no lo han hecho el tiempo suficiente, y se financian mediante impuestos. Los subsidios extraordinarios y las ayudas a domicilio forman parte generalmente de la acción asistencial y no exigen cotización previa, sino cumplir determinados requisitos, principalmente de carencia de recursos."
      },
      {
        id: 11004,
        moduloId: 611,
        pregunta: "¿Qué régimen de la Seguridad Social cubre a los trabajadores por cuenta propia?",
        opciones: [
          "Régimen General",
          "Régimen Especial del Mar",
          "RETA",
          "MUFACE"
        ],
        respuestaCorrecta: 2,
        explicacion: "El RETA (Régimen Especial de Trabajadores Autónomos) es el régimen de la Seguridad Social que cubre a los trabajadores por cuenta propia. Este régimen está específicamente diseñado para proteger a los trabajadores autónomos o por cuenta propia, incluyendo emprendedores individuales, profesionales liberales, socios de determinadas sociedades, familiares colaboradores y otros colectivos que realizan una actividad económica sin relación laboral por cuenta ajena. El Régimen General está destinado principalmente a trabajadores por cuenta ajena o asalariados. El Régimen Especial del Mar cubre a trabajadores del sector marítimo-pesquero, tanto por cuenta propia como ajena. MUFACE (Mutualidad General de Funcionarios Civiles del Estado) es un régimen especial para funcionarios civiles del Estado, no para autónomos. El RETA tiene particularidades en cuanto a cotización, prestaciones y cobertura respecto al Régimen General, aunque las sucesivas reformas han ido aproximando ambos regímenes. Los trabajadores autónomos deben darse de alta en el RETA y cotizar mensualmente para tener acceso a prestaciones como jubilación, incapacidad, maternidad/paternidad o, en determinados casos, desempleo (cese de actividad)."
      },
      {
        id: 11005,
        moduloId: 611,
        pregunta: "¿Qué prestación protege a la trabajadora embarazada ante riesgos laborales?",
        opciones: [
          "Prestación por nacimiento",
          "Prestación por lactancia",
          "Prestación por incapacidad temporal",
          "Prestación por riesgo durante el embarazo"
        ],
        respuestaCorrecta: 3,
        explicacion: "La prestación por riesgo durante el embarazo es la que protege específicamente a la trabajadora embarazada ante riesgos laborales. Esta prestación, regulada en los artículos 186 a 189 de la Ley General de la Seguridad Social y en el artículo 26 de la Ley de Prevención de Riesgos Laborales, se concede cuando la trabajadora debe suspender su contrato de trabajo porque su puesto implica riesgos para su embarazo o para el feto, y no es posible su adaptación o cambio a otro puesto compatible con su estado. Se considera derivada de contingencias profesionales, por lo que cubre el 100% de la base reguladora desde el primer día, sin período de carencia. La prestación por nacimiento y cuidado del menor (antigua prestación por maternidad) protege el descanso por nacimiento, adopción o acogimiento. La prestación por lactancia natural se refiere a la suspensión del contrato cuando el puesto de trabajo supone un riesgo para la lactancia natural. La prestación por incapacidad temporal cubre la imposibilidad temporal de trabajar por enfermedad o accidente, no específicamente los riesgos laborales durante el embarazo."
      },
      {
        id: 11006,
        moduloId: 611,
        pregunta: "¿Cuál será la edad ordinaria de jubilación en España en 2027?",
        opciones: [
          "65 años",
          "66 años y 6 meses",
          "67 años",
          "68 años"
        ],
        respuestaCorrecta: 2,
        explicacion: "La edad ordinaria de jubilación en España en 2027 será de 67 años. Esta edad se establece como resultado del proceso de reforma del sistema de pensiones iniciado con la Ley 27/2011, de 1 de agosto, sobre actualización, adecuación y modernización del sistema de Seguridad Social. Dicha ley estableció un período transitorio de elevación gradual de la edad de jubilación, que comenzó en 2013 (cuando la edad era de 65 años) y culminará en 2027, cuando la edad ordinaria de jubilación quedará fijada en 67 años. Durante este período transitorio, cada año aumenta progresivamente la edad de jubilación, con incrementos de uno o dos meses por año. Es importante señalar que la ley mantiene la posibilidad de jubilarse a los 65 años para quienes acrediten carreras de cotización largas (38 años y 6 meses cotizados en 2027). Esta reforma busca adaptar el sistema de pensiones al aumento de la esperanza de vida y garantizar su sostenibilidad financiera. En la actualidad (mayo 2025), la edad ordinaria de jubilación se sitúa en 66 años y 8 meses, continuando su progresión hasta alcanzar los 67 años en 2027."
      },
      {
        id: 11007,
        moduloId: 611,
        pregunta: "¿Qué porcentaje de la base reguladora se cobra por incapacidad permanente absoluta?",
        opciones: [
          "60%",
          "75%",
          "90%",
          "100%"
        ],
        respuestaCorrecta: 3,
        explicacion: "Por incapacidad permanente absoluta se cobra el 100% de la base reguladora. Esta modalidad de incapacidad permanente, definida en el artículo 194.5 de la Ley General de la Seguridad Social, es aquella que inhabilita por completo al trabajador para toda profesión u oficio. Dado que el trabajador queda totalmente incapacitado para realizar cualquier actividad laboral, la normativa establece una pensión vitalicia equivalente al 100% de la base reguladora. Este porcentaje reconoce la completa pérdida de capacidad laboral del trabajador. A diferencia de otros grados de incapacidad permanente que reciben porcentajes menores (como la incapacidad permanente total, que recibe el 55% de la base reguladora, o la incapacidad permanente parcial, que supone una indemnización a tanto alzado), la incapacidad permanente absoluta otorga el porcentaje máximo precisamente por la imposibilidad de desempeñar cualquier profesión. Además, estas pensiones están exentas de IRPF hasta un determinado límite, y son compatibles con determinadas actividades laborales que sean compatibles con el estado del incapacitado y no representen un cambio en su capacidad de trabajo."
      },
      {
        id: 11008,
        moduloId: 611,
        pregunta: "¿Quién gestiona las prestaciones por desempleo?",
        opciones: [
          "INSS",
          "IMSERSO",
          "INSST",
          "SEPE"
        ],
        respuestaCorrecta: 3,
        explicacion: "El SEPE (Servicio Público de Empleo Estatal) es la entidad que gestiona las prestaciones por desempleo. Este organismo autónomo, adscrito al Ministerio de Trabajo, se encarga del reconocimiento, gestión y pago de las prestaciones por desempleo, tanto en su nivel contributivo como asistencial. Sus funciones incluyen la tramitación de solicitudes, verificación de requisitos, cálculo de cuantías, abono de prestaciones y control de las obligaciones de los beneficiarios. El INSS (Instituto Nacional de la Seguridad Social) gestiona las prestaciones económicas del sistema de Seguridad Social, como jubilación, incapacidad permanente o prestaciones familiares, pero no las de desempleo. El IMSERSO (Instituto de Mayores y Servicios Sociales) se ocupa principalmente de las pensiones no contributivas de jubilación e invalidez, y de servicios sociales para personas mayores y dependientes. El INSST (Instituto Nacional de Seguridad y Salud en el Trabajo) es un órgano científico-técnico centrado en el análisis y estudio de las condiciones de seguridad y salud en el trabajo, así como en la promoción de la prevención de riesgos laborales, no gestionando prestaciones económicas."
      },
      {
        id: 11009,
        moduloId: 611,
        pregunta: "¿Qué entidad gestiona las pensiones no contributivas y atención a mayores?",
        opciones: [
          "INSS",
          "IMSERSO",
          "SEPE",
          "MUGEJU"
        ],
        respuestaCorrecta: 1,
        explicacion: "El IMSERSO (Instituto de Mayores y Servicios Sociales) es la entidad que gestiona las pensiones no contributivas y la atención a mayores. Este organismo, dependiente del Ministerio de Derechos Sociales y Agenda 2030, tiene atribuida la gestión de las pensiones de invalidez y jubilación en su modalidad no contributiva, así como de los servicios complementarios de las prestaciones del sistema de Seguridad Social para personas mayores y con discapacidad. También desarrolla políticas y programas en relación con el envejecimiento activo y la prevención de la dependencia, turismo y termalismo social para mayores, y la gestión y coordinación del sistema de autonomía personal y atención a la dependencia. El INSS (Instituto Nacional de la Seguridad Social) gestiona principalmente prestaciones contributivas. El SEPE (Servicio Público de Empleo Estatal) se encarga de las prestaciones por desempleo. MUGEJU (Mutualidad General Judicial) es el régimen especial de Seguridad Social para el personal al servicio de la Administración de Justicia. Aunque la gestión de pensiones no contributivas corresponde al IMSERSO, en la práctica está transferida a las Comunidades Autónomas, quienes tramitan y resuelven estas prestaciones, excepto en Ceuta y Melilla, donde sigue siendo competencia directa del IMSERSO."
      },
      {
        id: 11010,
        moduloId: 611,
        pregunta: "¿Qué régimen cubre a la mayoría de trabajadores por cuenta ajena?",
        opciones: [
          "Régimen General",
          "RETA",
          "MUFACE",
          "Régimen del Mar"
        ],
        respuestaCorrecta: 0,
        explicacion: "El Régimen General de la Seguridad Social es el que cubre a la mayoría de trabajadores por cuenta ajena. Este régimen, regulado en el Título II de la Ley General de la Seguridad Social, está diseñado para proteger a los trabajadores asalariados o por cuenta ajena de la industria, el comercio, los servicios y otros sectores productivos. Incluye a trabajadores con contrato laboral de empresas privadas, así como al personal laboral de la administración pública. El Régimen General es el más amplio del sistema, englobando aproximadamente al 75% de los afiliados a la Seguridad Social. El RETA (Régimen Especial de Trabajadores Autónomos) está destinado a trabajadores por cuenta propia. MUFACE (Mutualidad General de Funcionarios Civiles del Estado) cubre a los funcionarios civiles del Estado, no a trabajadores por cuenta ajena con contrato laboral. El Régimen Especial del Mar protege a trabajadores del sector marítimo-pesquero. Cabe destacar que el Régimen General ha ido integrando progresivamente a colectivos que antes tenían regímenes especiales, como trabajadores agrarios por cuenta ajena, empleados de hogar, artistas, toreros, representantes de comercio o ferroviarios, consolidándose como el régimen principal del sistema."
      },
      {
        id: 11011,
        moduloId: 611,
        pregunta: "¿Cuál es el nivel de prestación que no exige haber cotizado previamente pero sí acreditar carencia de ingresos?",
        opciones: [
          "Nivel contributivo",
          "Complementario",
          "Nivel asistencial",
          "Subvencionado"
        ],
        respuestaCorrecta: 2,
        explicacion: "El nivel asistencial es el que no exige haber cotizado previamente pero sí acreditar carencia de ingresos. Este nivel de protección, también conocido como no contributivo, está dirigido a personas que se encuentran en situación de necesidad económica y carecen de recursos suficientes, aunque no hayan cotizado o no lo hayan hecho el tiempo necesario para acceder a las prestaciones contributivas. El requisito fundamental es la insuficiencia de rentas, generalmente no superar un determinado umbral de ingresos (habitualmente el 75% del Salario Mínimo Interprofesional). Ejemplos de prestaciones de nivel asistencial son los subsidios por desempleo, las pensiones no contributivas de jubilación e invalidez, las prestaciones familiares no contributivas o las prestaciones de dependencia. El nivel contributivo, por el contrario, requiere periodos previos de cotización y sus prestaciones están vinculadas a las aportaciones realizadas. No existe propiamente un nivel 'complementario' o 'subvencionado' en la estructura del sistema español de Seguridad Social, que se articula fundamentalmente en torno a los niveles contributivo y asistencial, completados por servicios sociales y prestaciones de asistencia sanitaria."
      },
      {
        id: 11012,
        moduloId: 611,
        pregunta: "¿Qué prestación corresponde a un trabajador con una jornada reducida por cuidar a un menor con cáncer?",
        opciones: [
          "Prestación por hijo a cargo",
          "Prestación por cuidado de menores con enfermedad grave",
          "Prestación por desempleo parcial",
          "Prestación por lactancia"
        ],
        respuestaCorrecta: 1,
        explicacion: "La prestación por cuidado de menores con enfermedad grave es la que corresponde a un trabajador con jornada reducida por cuidar a un menor con cáncer. Esta prestación, regulada en el artículo 190 de la Ley General de la Seguridad Social, está destinada a los progenitores, adoptantes o acogedores que reducen su jornada laboral para el cuidado directo, continuo y permanente de menores afectados por cáncer o por cualquier otra enfermedad grave que implique un ingreso hospitalario de larga duración y requiera cuidado directo. La prestación consiste en un subsidio equivalente al 100% de la base reguladora establecida para la prestación por incapacidad temporal, en proporción a la reducción de jornada (que debe ser al menos del 50%). Se reconoce por un periodo inicial de un mes, prorrogable por periodos de dos meses, y como máximo hasta que el menor cumpla 23 años. La prestación por hijo a cargo es una asignación económica por cada hijo menor de 18 años o mayor con discapacidad. No existe una prestación denominada 'por desempleo parcial'. La prestación por lactancia se refiere al riesgo durante la lactancia natural por condiciones de trabajo."
      },
      {
        id: 11013,
        moduloId: 611,
        pregunta: "¿Qué requisito es necesario para recibir prestación por desempleo contributiva?",
        opciones: [
          "Haber cotizado al menos 180 días",
          "Haber cotizado al menos 360 días en los últimos 6 años",
          "Ser mayor de 52 años",
          "Haber tenido un contrato indefinido"
        ],
        respuestaCorrecta: 1,
        explicacion: "Para recibir prestación por desempleo contributiva es necesario haber cotizado al menos 360 días en los últimos 6 años. Este requisito está establecido en el artículo 269 de la Ley General de la Seguridad Social, que exige un período mínimo de cotización de 360 días dentro de los 6 años anteriores a la situación legal de desempleo o al momento en que cesó la obligación de cotizar. Además de este período de carencia, para acceder a esta prestación es necesario encontrarse en situación legal de desempleo, estar afiliado y en alta (o situación asimilada) en la Seguridad Social, inscribirse como demandante de empleo y mantener dicha inscripción durante la percepción, y no haber cumplido la edad ordinaria de jubilación. No es requisito haber cotizado solo 180 días (aunque este período puede dar derecho a subsidio asistencial en ciertos casos), ni ser mayor de 52 años (esta edad es relevante para el subsidio para mayores de 52 años), ni haber tenido necesariamente un contrato indefinido (los contratos temporales también generan derecho si se cumple con el período de cotización requerido)."
      },
      {
        id: 11014,
        moduloId: 611,
        pregunta: "¿Qué prestación se cobra desde el día siguiente al de la baja por accidente laboral?",
        opciones: [
          "Incapacidad temporal por contingencia profesional",
          "Riesgo durante la lactancia",
          "Subsidio extraordinario",
          "Ayuda por nacimiento"
        ],
        respuestaCorrecta: 0,
        explicacion: "La prestación de incapacidad temporal por contingencia profesional se cobra desde el día siguiente al de la baja por accidente laboral. Según establece el artículo 173 de la Ley General de la Seguridad Social, el subsidio por incapacidad temporal derivada de accidente de trabajo o enfermedad profesional (contingencias profesionales) se abona desde el día siguiente al de la baja médica, corriendo a cargo del empresario el salario íntegro del día del accidente. La cuantía de esta prestación es del 75% de la base reguladora desde el primer día. Esta inmediatez en el cobro difiere de la incapacidad temporal por contingencias comunes (enfermedad común o accidente no laboral), donde la prestación se percibe a partir del cuarto día de la baja, siendo los días 4º al 15º a cargo del empresario, y desde el 16º a cargo de la entidad gestora o colaboradora. La prestación por riesgo durante la lactancia, aunque también se considera contingencia profesional, no está vinculada a un accidente laboral sino a riesgos del puesto para la lactancia natural. Los subsidios extraordinarios y ayudas por nacimiento tienen sus propias reglas respecto al devengo y no están relacionados directamente con accidentes laborales."
      },
      {
        id: 11015,
        moduloId: 611,
        pregunta: "¿Qué porcentaje de la base reguladora se cobra por incapacidad permanente total?",
        opciones: [
          "55%",
          "65%",
          "70%",
          "80%"
        ],
        respuestaCorrecta: 0,
        explicacion: "Por incapacidad permanente total se cobra el 55% de la base reguladora. Según establece el artículo 196.2 de la Ley General de la Seguridad Social, la incapacidad permanente total para la profesión habitual (aquella que inhabilita al trabajador para realizar todas o las fundamentales tareas de su profesión, pudiendo dedicarse a otra distinta) se compensará con una pensión vitalicia correspondiente al 55% de la base reguladora. Este porcentaje puede incrementarse en un 20% adicional (llegando al 75%) para los mayores de 55 años cuando, por diversas circunstancias (falta de preparación general o especializada, circunstancias sociales y laborales del lugar de residencia), se presuma la dificultad de obtener empleo en actividad distinta de la habitual, lo que se conoce como 'incapacidad permanente total cualificada'. La base reguladora se calcula según fórmulas específicas que varían dependiendo de si la incapacidad deriva de contingencias comunes o profesionales. Este porcentaje del 55% es inferior al de la incapacidad permanente absoluta (100%) o gran invalidez (100% más un complemento), dado que la incapacidad total permite teóricamente seguir trabajando en profesiones distintas a la habitual."
      },
      {
        id: 11016,
        moduloId: 611,
        pregunta: "¿Qué entidad se encarga de la recaudación de las cuotas de la Seguridad Social?",
        opciones: [
          "Tesorería General de la Seguridad Social",
          "INSS",
          "IMSERSO",
          "SEPE"
        ],
        respuestaCorrecta: 0,
        explicacion: "La Tesorería General de la Seguridad Social (TGSS) es la entidad que se encarga de la recaudación de las cuotas de la Seguridad Social. Este organismo, regulado en el Real Decreto 1314/1984, actúa como caja única del sistema, centralizando todos los recursos financieros, tanto por operaciones presupuestarias como extrapresupuestarias. Entre sus funciones principales destacan: inscripción de empresas, afiliación, altas y bajas de trabajadores, gestión y control de la cotización y recaudación de cuotas y demás recursos del sistema, y la gestión de la tesorería del sistema, realizando los pagos de las obligaciones de la Seguridad Social. El INSS (Instituto Nacional de la Seguridad Social) se encarga del reconocimiento y gestión de las prestaciones económicas del sistema, pero no de la recaudación. El IMSERSO (Instituto de Mayores y Servicios Sociales) gestiona las pensiones no contributivas y servicios para mayores y dependientes. El SEPE (Servicio Público de Empleo Estatal) gestiona las prestaciones por desempleo. La TGSS, por tanto, es el 'banco de la Seguridad Social', que recauda las cotizaciones y después distribuye los fondos para el pago de las diferentes prestaciones a través de las entidades gestoras correspondientes."
      },
      {
        id: 11017,
        moduloId: 611,
        pregunta: "¿Qué principio organiza los distintos regímenes bajo un sistema común de financiación y gestión?",
        opciones: [
          "Solidaridad profesional",
          "Centralización impositiva",
          "Exclusividad contributiva",
          "Unidad de caja"
        ],
        respuestaCorrecta: 3,
        explicacion: "El principio de unidad de caja organiza los distintos regímenes bajo un sistema común de financiación y gestión. Este principio, consagrado en el artículo 18.1 de la Ley General de la Seguridad Social, establece que la Tesorería General de la Seguridad Social es la caja única del sistema a través de la cual se unifican todos los recursos financieros. Esto significa que, independientemente del régimen de procedencia, todas las cotizaciones y demás ingresos se integran en un fondo único, desde el cual se pagan todas las prestaciones del sistema. De esta forma, los recursos no quedan afectos a regímenes concretos, sino que se utilizan para financiar todas las necesidades del sistema, facilitando la solidaridad entre regímenes y generaciones. La unidad de caja es clave para la sostenibilidad financiera del sistema, permitiendo compensar los desequilibrios entre distintos regímenes y garantizar el pago de todas las prestaciones. La solidaridad profesional, aunque existe, no define específicamente la centralización de recursos. La centralización impositiva no es un principio de la Seguridad Social. La exclusividad contributiva no existe como principio, ya que el sistema combina financiación contributiva y transferencias del Estado."
      },
      {
        id: 11018,
        moduloId: 611,
        pregunta: "¿Qué principio garantiza que las generaciones actuales financien las prestaciones de las futuras?",
        opciones: [
          "Universalidad",
          "Equidad",
          "Solidaridad intergeneracional",
          "Unidad de caja"
        ],
        respuestaCorrecta: 2,
        explicacion: "El principio de solidaridad intergeneracional garantiza que las generaciones actuales financien las prestaciones de las futuras. Este principio, fundamental en los sistemas de reparto como el español, implica que las cotizaciones de los trabajadores activos de hoy no se destinan a un fondo individual para su futura pensión, sino que financian directamente las prestaciones de los actuales pensionistas, esperando que cuando los trabajadores actuales se jubilen, sus prestaciones sean financiadas por la siguiente generación de cotizantes. La solidaridad intergeneracional es esencial para la sostenibilidad del sistema público de pensiones y refleja un pacto social entre generaciones. El principio de universalidad se refiere a la extensión de la protección a toda la población. La equidad busca un equilibrio entre cotizaciones aportadas y prestaciones recibidas. La unidad de caja, aunque relacionada, se refiere a la centralización de todos los recursos financieros en un único organismo (TGSS) para su gestión conjunta, independientemente de su origen y destino, pero no específicamente a la relación entre generaciones. El envejecimiento poblacional y la reducción de la natalidad suponen un reto para la solidaridad intergeneracional, motivando diversas reformas para garantizar la sostenibilidad del sistema."
      },
      {
        id: 11019,
        moduloId: 611,
        pregunta: "¿Qué régimen especial cubre a los trabajadores del mar?",
        opciones: [
          "MUFACE",
          "RETA",
          "Régimen Especial de los Trabajadores del Mar",
          "Régimen Agrario"
        ],
        respuestaCorrecta: 2,
        explicacion: "El Régimen Especial de los Trabajadores del Mar es el que cubre específicamente a los trabajadores del sector marítimo-pesquero. Este régimen, regulado por la Ley 47/2015, de 21 de octubre, está diseñado para atender las particularidades del trabajo en el mar, considerando factores como la estacionalidad, la peligrosidad de la actividad, los períodos de inactividad y las condiciones específicas de aislamiento. El régimen incluye tanto a trabajadores por cuenta ajena (tripulantes de buques de pesca, marina mercante, tráfico interior de puertos, etc.) como por cuenta propia (armadores, mariscadores, etc.) que realizan su actividad en el ámbito marítimo-pesquero. MUFACE (Mutualidad General de Funcionarios Civiles del Estado) es el régimen especial para funcionarios civiles del Estado. El RETA (Régimen Especial de Trabajadores Autónomos) cubre a trabajadores por cuenta propia de distintos sectores, no específicamente a los del mar. El Régimen Especial Agrario como tal ya no existe, pues los trabajadores agrarios por cuenta ajena se integraron en el Régimen General (Sistema Especial Agrario) y los por cuenta propia en el RETA."
      },
      {
        id: 11020,
        moduloId: 611,
        pregunta: "¿Qué prestación se otorga a los progenitores por el nacimiento o adopción de un hijo?",
        opciones: [
          "Prestación por lactancia",
          "Prestación por nacimiento y cuidado del menor",
          "Riesgo durante el embarazo",
          "Incapacidad permanente"
        ],
        respuestaCorrecta: 1,
        explicacion: "La prestación por nacimiento y cuidado del menor es la que se otorga a los progenitores por el nacimiento o adopción de un hijo. Esta prestación, regulada en los artículos 177 a 182 de la Ley General de la Seguridad Social tras la reforma introducida por el Real Decreto-ley 6/2019, unifica las antiguas prestaciones de maternidad y paternidad. La prestación protege los periodos de suspensión del contrato de trabajo o cese en la actividad por nacimiento, adopción, guarda con fines de adopción o acogimiento. Actualmente, tras la equiparación completa, ambos progenitores tienen derecho a 16 semanas de suspensión, siendo obligatorias las 6 primeras semanas posteriores al parto, adopción o acogimiento. La cuantía es del 100% de la base reguladora correspondiente. La prestación por lactancia se refiere específicamente al riesgo durante la lactancia natural por condiciones del puesto de trabajo. La prestación por riesgo durante el embarazo protege el periodo de suspensión cuando las condiciones de trabajo pueden afectar negativamente a la salud de la trabajadora embarazada o del feto. La incapacidad permanente cubre la situación del trabajador que presenta reducciones anatómicas o funcionales graves que disminuyen o anulan su capacidad laboral."
      },
      {
        id: 11021,
        moduloId: 611,
        pregunta: "¿Cuál es la base reguladora para la prestación por riesgo durante el embarazo?",
        opciones: [
          "Promedio de los últimos 24 meses",
          "Promedio de los últimos 180 días",
          "Promedio de 12 meses",
          "Último salario recibido"
        ],
        respuestaCorrecta: 1,
        explicacion: "La base reguladora para la prestación por riesgo durante el embarazo es el promedio de los últimos 180 días. Según establece el artículo 187 de la Ley General de la Seguridad Social, en relación con el artículo 7 del Real Decreto 295/2009, la prestación económica por riesgo durante el embarazo se calcula aplicando el porcentaje del 100% a la base reguladora correspondiente. Dicha base reguladora es la misma que la establecida para la prestación de incapacidad temporal derivada de contingencias profesionales, es decir, la base de cotización por contingencias profesionales del mes anterior a la fecha de inicio de la suspensión del contrato, dividida entre 30 (o entre el número de días a que corresponda la cotización). Si la trabajadora lleva menos de un mes de alta, se toma como base reguladora la base de cotización correspondiente a los días trabajados dividida entre los días cotizados. Cabe destacar que, al tratarse de una contingencia profesional, se incluyen las horas extraordinarias realizadas en el período considerado. Esta prestación, al considerarse derivada de contingencias profesionales, garantiza el 100% de la base reguladora desde el día en que se inicia la suspensión del contrato por riesgo durante el embarazo."
      },
      {
        id: 11022,
        moduloId: 611,
        pregunta: "¿Qué tipo de jubilación permite reducir jornada laboral y cobrar una parte de la pensión?",
        opciones: [
          "Jubilación ordinaria",
          "Jubilación activa",
          "Jubilación especial",
          "Jubilación parcial"
        ],
        respuestaCorrecta: 3,
        explicacion: "La jubilación parcial es la que permite reducir la jornada laboral y cobrar una parte de la pensión. Esta modalidad, regulada en el artículo 215 de la Ley General de la Seguridad Social y desarrollada en el Real Decreto 1131/2002, permite compatibilizar el cobro de una parte de la pensión de jubilación con un trabajo a tiempo parcial, con la correspondiente reducción de jornada. Existen dos modalidades principales: 1) Jubilación parcial anticipada: para trabajadores que no han alcanzado la edad legal de jubilación, requiere la celebración simultánea de un contrato de relevo. La reducción de jornada debe estar entre el 25% y el 50% (75% en determinados casos). 2) Jubilación parcial diferida: para quienes ya han cumplido la edad legal de jubilación, no exige contrato de relevo y la reducción de jornada puede oscilar entre el 25% y el 50%. La pensión se calcula aplicando el porcentaje de reducción de jornada a la pensión que correspondería como jubilación total. La jubilación ordinaria supone el cese total de la actividad laboral. La jubilación activa permite compatibilizar el cobro de una parte de la pensión con un trabajo por cuenta propia o ajena a tiempo completo o parcial, pero no implica necesariamente una reducción de jornada. No existe formalmente una 'jubilación especial' como tal en la normativa española."
      },
      {
        id: 11023,
        moduloId: 611,
        pregunta: "¿Qué tipo de incapacidad impide realizar cualquier trabajo?",
        opciones: [
          "Incapacidad permanente absoluta",
          "Incapacidad parcial",
          "Incapacidad total",
          "Cese de actividad"
        ],
        respuestaCorrecta: 0,
        explicacion: "La incapacidad permanente absoluta es el tipo de incapacidad que impide realizar cualquier trabajo. Según el artículo 194.5 de la Ley General de la Seguridad Social, la incapacidad permanente absoluta se define como aquella que inhabilita por completo al trabajador para toda profesión u oficio. Esta calificación reconoce que el trabajador, a causa de sus lesiones o enfermedades, ha perdido totalmente su capacidad laboral, no pudiendo desempeñar ninguna actividad profesional. La incapacidad permanente parcial, definida en el artículo 194.3, ocasiona al trabajador una disminución no inferior al 33% en su rendimiento normal para su profesión habitual, sin impedirle la realización de las tareas fundamentales de la misma. La incapacidad permanente total, según el artículo 194.4, inhabilita al trabajador para realizar todas o las fundamentales tareas de su profesión habitual, pero puede dedicarse a otra distinta. El cese de actividad es una situación protegida para trabajadores autónomos que han tenido que finalizar su actividad de forma involuntaria, equivalente al desempleo de los trabajadores por cuenta ajena, no es una incapacidad. La incapacidad permanente absoluta da derecho a una pensión vitalicia del 100% de la base reguladora."
      },
      {
        id: 11024,
        moduloId: 611,
        pregunta: "¿Qué porcentaje se cobra durante los primeros 180 días de la prestación por desempleo?",
        opciones: [
          "60%",
          "70%",
          "50%",
          "100%"
        ],
        respuestaCorrecta: 1,
        explicacion: "Durante los primeros 180 días de la prestación por desempleo se cobra el 70% de la base reguladora. Según establece el artículo 270.2 de la Ley General de la Seguridad Social, la cuantía de la prestación por desempleo de nivel contributivo se determina aplicando a la base reguladora unos porcentajes escalonados: a) El 70% durante los primeros 180 días. b) El 60% a partir del día 181 hasta el final de la prestación. Esta escala busca proporcionar mayor protección económica en los primeros meses de desempleo, cuando el impacto de la pérdida del empleo es mayor, reduciéndose después para incentivar la búsqueda activa de empleo. La base reguladora se calcula a partir del promedio de las bases de cotización por desempleo de los últimos 180 días cotizados. Es importante señalar que existen límites máximos y mínimos a la cuantía de la prestación, establecidos en función del IPREM (Indicador Público de Renta de Efectos Múltiples) y de las cargas familiares del beneficiario. La duración de la prestación depende del tiempo cotizado en los últimos 6 años, con un mínimo de 120 días y un máximo de 720 días para quienes hayan cotizado 6 años o más."
      },
      {
        id: 11025,
        moduloId: 611,
        pregunta: "¿Qué tipo de contingencia es un accidente doméstico?",
        opciones: [
          "Contingencia profesional",
          "Contingencia común",
          "Contingencia asistencial",
          "Contingencia habitual"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un accidente doméstico es una contingencia común. En el sistema español de Seguridad Social, las contingencias se clasifican principalmente en profesionales y comunes. Las contingencias profesionales son aquellas derivadas del trabajo (accidentes de trabajo y enfermedades profesionales), mientras que las contingencias comunes son las que no tienen relación con la actividad laboral, incluyendo enfermedades comunes y accidentes no laborales. Un accidente doméstico, al producirse en el ámbito del hogar y no tener relación con la actividad laboral (salvo casos específicos como el de los empleados de hogar en su jornada o el teletrabajo), se considera un accidente no laboral y, por tanto, una contingencia común. Esta clasificación tiene importantes implicaciones prácticas, ya que las contingencias profesionales reciben un tratamiento más favorable en términos de acceso a las prestaciones (no se exige período previo de cotización), cuantía (generalmente superior) y momento de percepción (desde el día siguiente al hecho causante). No existen formalmente categorías como 'contingencia asistencial' o 'contingencia habitual' en la normativa de Seguridad Social española."
      }
    ]
  };

  export default moduloUnidadOcho;