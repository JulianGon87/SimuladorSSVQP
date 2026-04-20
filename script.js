const questionPool = [
    // --- HISTORIA E INSTITUCIONALIDAD ---
    { 
        q: "¿En qué año se creó el Ministerio de Higiene, Asistencia y Previsión Social?", 
        options: ["1924", "1952", "1979", "1980"], 
        correct: 0, 
        cite: "El año 1924 se crea el Ministerio de Higiene, Asistencia y Previsión Social que se haría cargo de las tareas de higiene pública." 
    },
    { 
        q: "¿Qué ley estableció el Servicio Nacional de Salud (SNS) en 1952?", 
        options: ["Ley 18.834", "Ley 10.383", "Ley 20.545", "Ley 19.664"], 
        correct: 1, 
        cite: "En 1952 se promulga la Ley 10.383 que establece el Servicio Nacional de Salud (SNS)." 
    },
    { 
        q: "¿En qué fecha entró en vigencia la ley que creó específicamente los Servicios de Salud?", 
        options: ["3 de agosto de 1979", "1 de enero de 1980", "1 de agosto de 1980", "1 de enero de 2005"], 
        correct: 2, 
        cite: "El 1 agosto de 1980 entra en vigencia la ley que crea los Servicios de Salud y comienza así a funcionar el Servicio de Salud Viña del Mar-Quillota." 
    },
    { 
        q: "¿Qué provincias abarca la jurisdicción del SSVQP?", 
        options: ["Marga Marga, Quillota, Petorca y Valparaíso", "Solo Viña del Mar y Quillota", "Valparaíso, San Antonio y Aconcagua", "Toda la Región de Valparaíso"], 
        correct: 0, 
        cite: "Su jurisdicción abarca 18 comunas distribuidas en las provincias de Marga Marga, Quillota, Petorca y Valparaíso." 
    },
    { 
        q: "¿Cuál de estos hospitales es de ALTA complejidad en la red SSVQP?", 
        options: ["Hospital de Petorca", "Hospital Dr. Gustavo Fricke", "Hospital Santo Tomás de Limache", "Hospital Juana Ross"], 
        correct: 1, 
        cite: "La red asistencial está compuesta por 11 hospitales... incluyendo tres de alta complejidad: el Hospital Dr. Gustavo Fricke, el Hospital Provincial Marga Marga y el Hospital Biprovincial Quillota Petorca." 
    },
    { 
        q: "¿Qué porcentaje de la población del SSVQP es mayor de 65 años?", 
        options: ["11,0%", "16,9%", "25,5%", "50%"], 
        correct: 1, 
        cite: "La población bajo su cuidado asciende a 1.182.912 personas, con un... 16,9% mayor de 65 años." 
    },
    { 
        q: "¿Qué hospitales forman parte de los proyectos recientemente normalizados o nuevos?", 
        options: ["Solo el Geriátrico de Limache", "Hospital Fricke, Biprovincial Quillota Petorca y Provincial Marga Marga", "Hospital de Quintero y La Ligua", "Solo Hospital de Quilpué"], 
        correct: 1, 
        cite: "A los proyectos ya normalizados del Hospital Dr. Gustavo Fricke y Hospital Biprovincial Quillota Petorca, se sumó, recientemente, el Hospital Provincial Marga Marga." 
    },
    { 
        q: "¿Cuál es la misión institucional del SSVQP?", 
        options: ["Ser la mejor empresa de salud de Chile", "Brindar servicios asistenciales, prevención y promoción con participación vinculante de usuarios", "Construir hospitales de última tecnología", "Atender solo a pacientes Fonasa"], 
        correct: 1, 
        cite: "NUESTRA MISIÓN: Una red integrada y continua... incorporando la participación vinculante de los usuarios, en la mejor gestión de los recursos disponibles." 
    },
    { 
        q: "¿Cuál de estos es un valor institucional mencionado en el estatuto?", 
        options: ["Competitividad", "Humildad y cercanía", "Rentabilidad", "Liderazgo autoritario"], 
        correct: 1, 
        cite: "NUESTROS VALORES: Humildad y cercanía." 
    },
    { 
        q: "¿Qué busca satisfacer la visión institucional?", 
        options: ["Las metas de presupuesto", "Las necesidades y expectativas de salud de la población con trato digno", "La demanda de las clínicas privadas", "El crecimiento de la población"], 
        correct: 1, 
        cite: "LA VISIÓN INSTITUCIONAL: Satisfacer las necesidades y expectativas de salud de la población... promoviendo un trato digno, de respeto, corresponsabilidad e inclusión." 
    },

    // --- CONCEPTOS ESTATUTARIOS ---
    { 
        q: "¿Qué es la 'Dotación' en el ámbito público?", 
        options: ["El presupuesto de medicamentos", "El conjunto de cargos asignados por ley a una institución", "El número de camas de un hospital", "La cantidad de médicos por turno"], 
        correct: 1, 
        cite: "Dotación: Es el conjunto de cargos asignados por ley a una institución." 
    },
    { 
        q: "¿Cómo se define un 'Cargo Público'?", 
        options: ["Un empleo temporal", "Aquel contemplado en las plantas o como empleos a contrata para funciones administrativas", "Cualquier trabajo pagado por el Estado", "Solo los cargos directivos"], 
        correct: 1, 
        cite: "Cargo público: Es aquél que se contempla en las plantas o como empleos a contrata... a través del cual se realiza una función administrativa." 
    },
    { 
        q: "¿Qué es el 'Empleo a contrata'?", 
        options: ["Un cargo permanente", "Aquel de carácter transitorio que se contempla en la dotación", "Un contrato de prestadores externos", "Un reemplazo por licencia"], 
        correct: 1, 
        cite: "Empleo a contrata: Es aquel de carácter transitorio que se contempla en la dotación de una institución." 
    },
    { 
        q: "¿Cómo se ingresa a los cargos de carrera en calidad de titular?", 
        options: ["Por antigüedad", "Por concurso público en el último grado de la planta", "Por designación del Director", "Por haber trabajado a contrata"], 
        correct: 1, 
        cite: "El ingreso a los cargos de carrera en calidad de titular se hará por concurso público y procederá en el último grado de la planta respectiva." 
    },
    { 
        q: "¿Qué estamentos pertenecen a la Ley 18.834?", 
        options: ["Médicos y Dentistas", "Directivos, Profesionales, Técnicos, Administrativos y Auxiliares", "Solo administrativos", "Solo profesionales de salud"], 
        correct: 1, 
        cite: "Ley 18.834 plantas de: Directiva, Profesional, Técnica, Administrativa, Auxiliares." 
    },
    { 
        q: "¿Qué es un funcionario 'Titular'?", 
        options: ["El jefe de servicio", "Aquel nombrado para ocupar en propiedad un cargo vacante", "Un reemplazante", "Un funcionario a honorarios"], 
        correct: 1, 
        cite: "Titular (nombrados para ocupar en propiedad cargo vacante)." 
    },
    { 
        q: "¿Cuándo se designa a un funcionario en calidad de 'Suplente'?", 
        options: ["En cargos vacantes o cuando el titular falta por un lapso no inferior a 15 días", "Para tareas específicas por 30 días", "Solo si el titular renuncia", "Cuando el Director lo decide"], 
        correct: 0, 
        cite: "Suplente (designados en tal calidad en cargos vacantes o aquellos cuyo titular ha desempeñado por un lapso no inferior a 15 días)." 
    },
    { 
        q: "¿Qué caracteriza al funcionario 'Subrogante'?", 
        options: ["Es elegido por votación", "Entra a desempeñar el empleo por el solo ministerio de la ley cuando el titular o suplente están impedidos", "Es contratado externamente", "Tiene fuero laboral"], 
        correct: 1, 
        cite: "Subrogante (entran a desempeñar el empleo del titular o suplente por el solo ministerio de la ley, cuando estos se encuentran impedidos)." 
    },
    { 
        q: "¿Cuál es el límite porcentual de empleos a contrata respecto a la planta?", 
        options: ["10%", "20%", "50%", "No hay límite"], 
        correct: 1, 
        cite: "El número de funcionarios a contrata de un servicio no puede exceder el 20% del de planta." 
    },
    { 
        q: "¿Puede un funcionario a contrata ejercer cargos directivos?", 
        options: ["Sí, si tiene postgrado", "No es posible ejercer cargos directivos (y resolutivos) estando a contrata", "Solo en hospitales pequeños", "Sí, temporalmente"], 
        correct: 1, 
        cite: "No es posible ejercer cargos directivos estando a contrata (y resolutivos)." 
    },

    // --- REMUNERACIONES Y ASIGNACIONES ---
    { 
        q: "¿Qué es el 'Sueldo' según la normativa?", 
        options: ["Cualquier dinero que recibe el trabajador", "La retribución pecuniaria fija asignada al empleo según su nivel o grado", "El pago de horas extras", "La suma de todas las asignaciones"], 
        correct: 1, 
        cite: "Sueldo: Es la retribución pecuniaria, de carácter fijo y por periodos iguales, asignado a un empleo publico de acuerdo con el nivel o grado." 
    },
    { 
        q: "¿Qué implica que las remuneraciones sean 'irrenunciables'?", 
        options: ["Que el jefe no las puede quitar", "Que el funcionario no puede renunciar a percibirlas por ser de interés público", "Que se pagan siempre en efectivo", "Que no tienen descuentos"], 
        correct: 1, 
        cite: "Son irrenunciables: Esto implica que el funcionario no puede renunciar a percibir las remuneraciones... la remuneración está concebida... como de carácter público." 
    },
    { 
        q: "¿Cuándo se pagan las remuneraciones habitualmente?", 
        options: ["Por adelantado el día 1", "Por mensualidades iguales y vencidas", "Cada 15 días", "Cuando el presupuesto lo permita"], 
        correct: 1, 
        cite: "Las remuneraciones se devengarán desde el día en que el funcionario asuma el cargo y se pagarán por mensualidades iguales y vencidas." 
    },
    { 
        q: "¿En qué casos pueden ser embargadas las remuneraciones?", 
        options: ["Por deudas en el retail", "Por pensiones alimenticias decretadas judicialmente o responsabilidad civil con el Fisco", "Por no pagar el arriendo", "En ningún caso"], 
        correct: 1, 
        cite: "No serán embargables los sueldos, salvo... deudas que provengan de pensiones alimenticias decretadas judicialmente." 
    },
    { 
        q: "¿Hasta qué porcentaje se puede embargar el sueldo por pensiones alimenticias?", 
        options: ["25%", "50%", "75%", "100%"], 
        correct: 1, 
        cite: "Podrán embargarse hasta el 50% de las prestaciones que reciba el alimentante." 
    },
    { 
        q: "¿Qué son las 'Remuneraciones Personales'?", 
        options: ["El sueldo base", "Aquellas que se perciben si se cumplen requisitos personales como antigüedad o títulos", "Los préstamos personales", "El pago de bonos de navidad"], 
        correct: 1, 
        cite: "Personales: son las que se tiene derecho a percibir si se cumplen ciertos requisitos de orden personal, como poseer determinada antigüedad, tener algún título, etc." 
    },
    { 
        q: "¿Qué límite tienen los descuentos voluntarios del empleado?", 
        options: ["5%", "15% de la renta", "20%", "No tienen límite"], 
        correct: 1, 
        cite: "Permite descuentos de índole voluntaria... siempre que... no excedan del 15% de la renta del empleado." 
    },
    { 
        q: "¿Cuál es el plazo de prescripción para el cobro de asignaciones?", 
        options: ["3 meses", "6 meses", "1 año", "2 años"], 
        correct: 1, 
        cite: "El derecho al cobro de las asignaciones... prescribirá en el plazo de seis meses contado desde la fecha en que se hicieron exigibles." 
    },
    { 
        q: "¿Qué es la 'Asignación de Turno'?", 
        options: ["Un premio por puntualidad", "Retribución por trabajar en puestos que requieren atención las 24 horas todos los días del año", "Pago por horas extras diurnas", "Un bono de colación"], 
        correct: 1, 
        cite: "Establece una asignación de turno para el personal... que labora efectiva y permanentemente en puestos de trabajo que requieren atención las 24 horas del día, durante todos los días del año." 
    },
    { 
        q: "¿Es compatible la Asignación de Turno con el pago de Horas Extraordinarias?", 
        options: ["Sí, siempre", "No, es incompatible, salvo emergencias sanitarias calificadas", "Solo en hospitales de alta complejidad", "Solo para médicos"], 
        correct: 1, 
        cite: "Será incompatible con la asignación establecida en la letra c)... (Horas Extraordinarias)... salvo cuando se trate de trabajos de carácter imprevisto motivados por emergencias sanitarias." 
    },

    // --- JORNADA Y TRABAJOS EXTRAORDINARIOS ---
    { 
        q: "¿Cuántas horas semanales dura la jornada ordinaria diurna?", 
        options: ["40 horas", "44 horas", "45 horas", "48 horas"], 
        correct: 1, 
        cite: "La jornada ordinaria de trabajo será de cuarenta y cuatro horas semanales." 
    },
    { 
        q: "¿Cómo se distribuye normalmente la jornada de 44 horas?", 
        options: ["De lunes a sábado", "De lunes a domingo", "De lunes a viernes", "Según el jefe"], 
        correct: 2, 
        cite: "Cuarenta y cuatro horas semanales distribuidas de lunes a viernes." 
    },
    { 
        q: "¿Cuál es el límite máximo de horas diarias de trabajo ordinario?", 
        options: ["8 horas", "9 horas", "10 horas", "12 horas"], 
        correct: 1, 
        cite: "No pudiendo exceder de nueve horas diarias." 
    },
    { 
        q: "¿Qué es el 'Trabajo Nocturno'?", 
        options: ["El que se realiza después de las 18:00", "El realizado entre las 21:00 horas de un día y las 07:00 del día siguiente", "Solo el de madrugada", "El de los fines de semana"], 
        correct: 1, 
        cite: "Se entenderá por trabajo nocturno el que se realiza entre las veintiuna horas de un día y las siete horas del día siguiente." 
    },
    { 
        q: "¿Qué recargo tiene el descanso complementario por horas extras nocturnas o en festivos?", 
        options: ["25%", "50%", "75%", "100%"], 
        correct: 1, 
        cite: "Compensados con un descanso complementario igual al tiempo trabajado más un aumento de cincuenta por ciento." 
    },
    { 
        q: "¿Qué recargo tiene el descanso por horas extras realizadas a continuación de la jornada?", 
        options: ["25%", "50%", "10%", "100%"], 
        correct: 0, 
        cite: "Será igual al tiempo trabajado más un aumento del veinticinco por ciento." 
    },
    { 
        q: "¿Qué días no están obligados a trabajar por la tarde los funcionarios?", 
        options: ["1 de mayo", "17 de septiembre, 24 y 31 de diciembre", "Viernes Santo", "Aniversario del hospital"], 
        correct: 1, 
        cite: "Los funcionarios no estarán obligados a trabajar las tardes de los días 17 de septiembre y 24 y 31 de diciembre de cada año." 
    },
    { 
        q: "¿Cómo se calcula el descuento por una hora de inasistencia?", 
        options: ["Sueldo dividido en 30", "Sueldo dividido en 190", "Sueldo dividido en 60", "Sueldo dividido en 24"], 
        correct: 1, 
        cite: "La remuneración correspondiente a... una hora de trabajo, será el cuociente que se obtenga de dividir la remuneración mensual por... ciento noventa." 
    },
    { 
        q: "¿Cuál es la sanción por atrasos y ausencias reiteradas injustificadas?", 
        options: ["Censura", "Multa", "Destitución, previa investigación sumaria", "Anotación de demérito"], 
        correct: 2, 
        cite: "Los atrasos y ausencias reiterados, sin causa justificada, serán sancionados con destitución, previa investigación sumaria." 
    },
    { 
        q: "¿Qué es el principio de 'Probidad Administrativa'?", 
        options: ["Llegar temprano", "Conducta moralmente intachable y entrega honesta con preeminencia del interés público sobre el privado", "Saber las leyes", "Tener buen trato"], 
        correct: 1, 
        cite: "Principio de probidad administrativa, que implica una conducta funcionaria moralmente intachable... con preeminencia del interés público sobre el privado." 
    },

    // --- FERIADOS Y PERMISOS ---
    { 
        q: "¿Cuántos días de feriado legal corresponden con menos de 15 años de servicio?", 
        options: ["10 días", "15 días hábiles", "20 días", "25 días"], 
        correct: 1, 
        cite: "Será de quince días hábiles para los funcionarios con menos de quince años de servicios." 
    },
    { 
        q: "¿Cuántos días de feriado corresponden con 20 o más años de servicio?", 
        options: ["15 días", "20 días", "25 días hábiles", "30 días"], 
        correct: 2, 
        cite: "Veinticinco días hábiles para los funcionarios con veinte o más años de servicio." 
    },
    { 
        q: "¿Se puede fraccionar el feriado legal?", 
        options: ["No", "Sí, pero una de las fracciones no podrá ser inferior a 10 días", "Sí, día por día", "Solo con licencia"], 
        correct: 1, 
        cite: "Podrán solicitar hacer uso del feriado en forma fraccionada, pero una de las fracciones no podrá ser inferior a diez días." 
    },
    { 
        q: "¿Cuál es el requisito para usar el primer feriado legal?", 
        options: ["Trabajar 6 meses", "Haber cumplido efectivamente un año de servicio", "Tener contrato de planta", "Tener buena calificación"], 
        correct: 1, 
        cite: "No tendrá derecho a hacer uso de feriado en tanto no haya cumplido efectivamente un año de servicio." 
    },
    { 
        q: "¿Cuántos días de permiso administrativo con goce de sueldo hay al año?", 
        options: ["3 días", "6 días hábiles", "10 días", "15 días"], 
        correct: 1, 
        cite: "Solicitar permisos... por motivos particulares hasta por seis días hábiles en el año calendario, con goce de remuneraciones." 
    },
    { 
        q: "¿Se pueden fraccionar los permisos administrativos?", 
        options: ["No", "Sí, por días o medios días", "Solo en horas", "Solo con licencia"], 
        correct: 1, 
        cite: "Estos permisos podrán fraccionarse por días o medios días." 
    },
    { 
        q: "¿Qué es el permiso 'Interferiado'?", 
        options: ["Vacaciones", "Días hábiles entre feriados o festivos que pueden ser de descanso si se recuperan las horas", "Un feriado religioso", "Un día de sanción"], 
        correct: 1, 
        cite: "Días hábiles insertos entre dos feriados... puedan ser de descanso... en tanto se recuperen con otra jornada u horas de trabajo." 
    },
    { 
        q: "¿Cuánto dura el permiso sin goce de sueldo por motivos particulares?", 
        options: ["1 mes", "Hasta seis meses en cada año calendario", "1 año", "2 años"], 
        correct: 1, 
        cite: "Permiso Sin Goce de Remuneraciones: a) Por motivos particulares, hasta por seis meses en cada año calendario." 
    },
    { 
        q: "¿Cuánto dura el permiso sin goce de sueldo para permanecer en el extranjero?", 
        options: ["6 meses", "1 año", "Hasta por dos años", "5 años"], 
        correct: 2, 
        cite: "b) Para permanecer en el extranjero, hasta por dos años." 
    },
    { 
        q: "¿Qué es una Licencia Médica?", 
        options: ["Un permiso de vacaciones", "Derecho a ausentarse para restablecer la salud bajo prescripción profesional", "Un día de castigo", "Una autorización de viaje"], 
        correct: 1, 
        cite: "Licencia médica el derecho que tiene el funcionario de ausentarse... con el fin de atender al restablecimiento de su salud." 
    },

    // --- DERECHOS MATERNALES Y PATERNALES ---
    { 
        q: "¿Cuántas semanas dura el descanso prenatal?", 
        options: ["2 semanas", "4 semanas", "6 semanas", "10 semanas"], 
        correct: 2, 
        cite: "Descanso de maternidad de seis semanas antes del parto." 
    },
    { 
        q: "¿Cuántas semanas dura el descanso postnatal?", 
        options: ["6 semanas", "12 semanas", "18 semanas", "24 semanas"], 
        correct: 1, 
        cite: "Y doce semanas después de él." 
    },
    { 
        q: "¿Qué es el Permiso Postnatal Parental?", 
        options: ["Permiso para el padre", "Doce semanas de permiso a continuación del periodo postnatal", "Permiso de alimentación", "Permiso para abuelos"], 
        correct: 1, 
        cite: "Tendrán derecho al permiso postnatal parental de doce semanas a continuación del período postnatal." 
    },
    { 
        q: "¿A cuánto se extiende el postnatal parental si se vuelve a media jornada?", 
        options: ["12 semanas", "18 semanas", "24 semanas", "No se puede"], 
        correct: 1, 
        cite: "Permiso postnatal parental se extenderá a dieciocho semanas... por la mitad de su jornada." 
    },
    { 
        q: "¿Cuántos días de permiso pagado tiene el padre por nacimiento de un hijo?", 
        options: ["3 días", "5 días", "7 días", "10 días"], 
        correct: 1, 
        cite: "El padre tendrá derecho a un permiso pagado de cinco días en caso de nacimiento de un hijo." 
    },
    { 
        q: "¿Qué es el 'Fuero Maternal'?", 
        options: ["Un bono", "Derecho a no ser despedida hasta un año después de terminado el postnatal", "Permiso para ir al médico", "Un tipo de licencia"], 
        correct: 1, 
        cite: "Derecho de toda trabajadora embarazada a no ser despedida durante su embarazo ni hasta un año después de terminado el postnatal." 
    },
    { 
        q: "¿Cuánto tiempo al día tiene la madre para alimentar a su hijo menor de 2 años?", 
        options: ["30 minutos", "Una hora al día", "Dos horas", "No tiene tiempo"], 
        correct: 1, 
        cite: "Las madres tendrán derecho a disponer, a lo menos, de una hora al día, para dar alimento a sus hijos menores de dos años." 
    },
    { 
        q: "¿Qué sucede si la madre fallece en el parto?", 
        options: ["Se pierde el beneficio", "El padre goza del permiso postnatal y del fuero", "El hospital se queda con el dinero", "El abuelo toma el permiso"], 
        correct: 1, 
        cite: "Si la madre muriera en el parto... el permiso postnatal... le corresponderá al padre... quien gozará del fuero." 
    },
    { 
        q: "¿Cuántos días de permiso hay por muerte de un hijo?", 
        options: ["5 días", "7 días", "Diez días corridos", "15 días"], 
        correct: 2, 
        cite: "Muerte de hijo: En caso de muerte de un hijo, todo trabajador tendrá derecho a diez días corridos de permiso pagado." 
    },
    { 
        q: "¿Cuántos días de permiso hay por muerte del cónyuge o conviviente civil?", 
        options: ["3 días", "5 días", "Siete días corridos", "10 días"], 
        correct: 2, 
        cite: "Muerte de cónyuge o conviviente civil... tendrá derecho a un permiso similar, por siete días corridos." 
    },

    // --- CALIFICACIONES Y DESEMPEÑO ---
    { 
        q: "¿Cuál es el objetivo de la evaluación de desempeño?", 
        options: ["Justificar despidos", "Evaluar aptitudes para promoción, estímulos y eliminación del Servicio", "Saber quién es más popular", "Controlar la asistencia"], 
        correct: 1, 
        cite: "Evaluar el desempeño y las aptitudes de cada funcionario... servirá de base para la promoción, estímulos y eliminación del Servicio." 
    },
    { 
        q: "¿Cuál es el periodo calificatorio?", 
        options: ["De enero a diciembre", "Del 1 de septiembre al 31 de agosto del año siguiente", "De marzo a diciembre", "Cada 6 meses"], 
        correct: 1, 
        cite: "Periodo entre el 1º de Septiembre de un año, al 31 de Agosto del año siguiente." 
    },
    { 
        q: "¿Cuántos informes cuatrimestrales debe emitir el jefe directo?", 
        options: ["Ninguno", "Uno", "Dos informes fundamentados", "Cuatro"], 
        correct: 2, 
        cite: "Los Jefes Directos y/o Precalificadores deben emitir dos informes cuatrimestrales fundamentados." 
    },
    { 
        q: "¿Quiénes NO deben ser calificados?", 
        options: ["Médicos", "Personal a contrata", "El Jefe Superior de la Institución y su Subrogante Legal", "Personal técnico"], 
        correct: 2, 
        cite: "Funcionarios Que No Deben Ser Calificados: El Jefe Superior de la Institución y su Subrogante Legal." 
    },
    { 
        q: "¿Qué nota corresponde al concepto 'Sobresaliente'?", 
        options: ["Nota 5", "Nota 6", "Nota 7", "Nota 10"], 
        correct: 2, 
        cite: "Nota 7: Sobresaliente." 
    },
    { 
        q: "¿Qué puntaje comprende la Lista 1 de Distinción?", 
        options: ["40 a 50", "50 a 59", "60 a 70 puntos", "Más de 100"], 
        correct: 2, 
        cite: "Lista Nº 1 de Distinción: 60 a 70 puntos." 
    },
    { 
        q: "¿Qué puntaje comprende la Lista 4 (Mala)?", 
        options: ["0 a 9", "10 a 29 puntos", "30 a 49", "Menos de 60"], 
        correct: 1, 
        cite: "Lista Nº 4 Mala: 10 a 29 puntos." 
    },
    { 
        q: "¿Qué sucede si un funcionario es calificado en Lista 4?", 
        options: ["Anotación de mérito", "Deberá retirarse del Servicio dentro de los 15 días siguientes", "Baja de grado", "No puede pedir vacaciones"], 
        correct: 1, 
        cite: "El funcionario que es calificado en lista 4... deberá retirarse del Servicio dentro de los 15 días siguientes." 
    },
    { 
        q: "¿Qué plazo tiene el funcionario para apelar la calificación ante el Director?", 
        options: ["3 días", "Cinco días", "10 días", "15 días"], 
        correct: 1, 
        cite: "Plazo apelación ante Director (5 días)." 
    },
    { 
        q: "¿Qué es la 'Hoja de Vida'?", 
        options: ["Un currículum", "Documento donde se anotan todas las actuaciones del empleado", "La ficha clínica", "Un diario personal"], 
        correct: 1, 
        cite: "Hoja de Vida: Documento donde se anotan todas las actuaciones del empleado." 
    },

    // --- RESPONSABILIDAD ADMINISTRATIVA Y SANCIONES ---
    { 
        q: "¿Qué sanción es la 'Censura'?", 
        options: ["Una multa", "Reprensión por escrito que se incorpora en la hoja de vida", "Suspensión del empleo", "Echarlos del trabajo"], 
        correct: 1, 
        cite: "Censura consiste en la reprensión por escrito... de la que se dejará constancia en la hoja de vida del funcionario (implícito en causales)." 
    },
    { 
        q: "¿Cuáles son las medidas disciplinarias?", 
        options: ["Multa y cárcel", "Censura, Multa, Suspensión y Destitución", "Despido inmediato", "Solo amonestación verbal"], 
        correct: 1, 
        cite: "Medidas disciplinarias: a) Censura; b) Multa; c) Suspensión... d) Destitución." 
    },
    { 
        q: "¿Qué es la 'Destitución'?", 
        options: ["Un traslado", "Decisión de la autoridad de poner término a los servicios de un funcionario", "Rebaja de sueldo", "Un permiso"], 
        correct: 1, 
        cite: "La destitución es la decisión de la autoridad... de poner término a los servicios de un funcionario." 
    },
    { 
        q: "¿Cuándo procede la destitución por ausencias?", 
        options: ["Faltar 1 día", "Ausentarse por más de tres días consecutivos sin causa justificada", "Llegar 10 min tarde", "No avisar una falta"], 
        correct: 1, 
        cite: "La medida... procederá... por: a) Ausentarse de la institución por más de tres días consecutivos, sin causa justificada." 
    },
    { 
        q: "¿Es la sanción administrativa independiente de la civil o penal?", 
        options: ["No, dependen", "Sí, es independiente de la responsabilidad civil y penal", "Solo si el juez lo dice", "Solo para delitos graves"], 
        correct: 1, 
        cite: "La sanción administrativa es independiente de la responsabilidad civil y penal." 
    },
    { 
        q: "¿Qué sucede si un funcionario destituido es absuelto por no constituir delito?", 
        options: ["Nada", "Deberá ser reincorporado a la institución en el cargo que desempeñaba", "Debe concursar de nuevo", "Se le paga indemnización y no vuelve"], 
        correct: 1, 
        cite: "Si en el proceso criminal hubiere sido absuelto... por no constituir delito... el funcionario deberá ser reincorporado." 
    },
    { 
        q: "¿Quién resuelve los reclamos por vicios de legalidad en el estatuto?", 
        options: ["El Director del SSVQP", "El Ministerio de Salud", "La Contraloría General de la República", "Tribunales ordinarios"], 
        correct: 2, 
        cite: "Los funcionarios tendrán derecho a reclamar ante la Contraloría General de la República." 
    },
    { 
        q: "¿Cuál es el plazo para reclamar ante Contraloría?", 
        options: ["5 días", "Diez días hábiles", "30 días", "60 días"], 
        correct: 1, 
        cite: "Los funcionarios tendrán un plazo de diez días hábiles... desde que tuvieren conocimiento de la situación." 
    },
    { 
        q: "¿Qué plazo tienen las remuneraciones y asignaciones para reclamar ante Contraloría?", 
        options: ["10 días", "30 días", "Sesenta días", "1 año"], 
        correct: 2, 
        cite: "Tratándose de... remuneraciones, asignaciones o viáticos el plazo para reclamar será de sesenta días." 
    },
    { 
        q: "¿En qué plazo prescriben los derechos de los funcionarios?", 
        options: ["6 meses", "1 año", "Dos años", "5 años"], 
        correct: 2, 
        cite: "Los derechos de los funcionarios consagrados en el Estatuto prescribirán en el plazo de dos años." 
    },

    // --- LEY KARIN Y CONDUCTAS ---
    { 
        q: "¿Qué busca la Ley Karin (Ley 21.643)?", 
        options: ["Aumentar sueldos", "Prevenir y sancionar acoso laboral, sexual y violencia en el trabajo", "Comprar insumos", "Reducir filas"], 
        correct: 1, 
        cite: "La Ley Karin (Ley 21.643) establece un marco legal claro para prevenir y sancionar el acoso laboral, acoso sexual y la violencia." 
    },
    { 
        q: "¿A quién honra el nombre de la Ley Karin?", 
        options: ["Una ex Ministra", "Karin Salgado, funcionaria de salud víctima de acoso", "Una enfermera histórica", "La primera mujer médica"], 
        correct: 1, 
        cite: "Esta normativa honra la memoria de Karin Salgado, funcionaria de salud... quien falleció en 2019 tras ser víctima de acoso laboral." 
    },
    { 
        q: "¿Qué es la 'Asimetría de Poder'?", 
        options: ["Fuerza física", "Cuando una persona ostenta mayor poder o capacidad de influencia contra otra", "Ser el jefe", "Ganar más"], 
        correct: 1, 
        cite: "La asimetría de poder significa que una persona tiene u ostenta un mayor poder contra otra... capacidad de influencia, de dominación." 
    },
    { 
        q: "¿Cómo se define el Acoso Laboral ahora?", 
        options: ["Reiterado por 6 meses", "Agresión u hostigamiento que ocurra una sola vez o de manera reiterada", "Solo físico", "Discusiones"], 
        correct: 1, 
        cite: "Definiéndolo como 'toda conducta que constituya agresión u hostigamiento... ya sea que se manifieste una sola vez o de manera reiterada'." 
    },
    { 
        q: "¿Qué es el 'Mansplaining'?", 
        options: ["Explicación no solicitada a una mujer experta por parte de un hombre", "Interrumpir a alguien", "Hacer chistes", "No saludar"], 
        correct: 0, 
        cite: "Darle a una mujer una explicación no solicitada cuando ella es experta... denominado en la literatura sociológica como 'mansplaining'." 
    },
    { 
        q: "¿Qué es el 'Manterrupting'?", 
        options: ["Interrumpir a un hombre", "Interrumpir bruscamente a una mujer mientras habla", "Falta de luz", "Un programa"], 
        correct: 1, 
        cite: "Interrumpir bruscamente a una mujer mientras habla y sin esperar que ella termine... denominado... como 'manterrupting'." 
    },
    { 
        q: "¿Qué es el Acoso Sexual?", 
        options: ["Un piropo", "Requerimientos sexuales no consentidos que perjudican la situación laboral", "Ver películas", "Pareja"], 
        correct: 1, 
        cite: "Acoso sexual... el que una persona realice en forma indebida... requerimientos de carácter sexual, no consentidos." 
    },
    { 
        q: "¿Es necesario el rechazo explícito en acoso sexual?", 
        options: ["Sí", "No representa un requisito imprescindible, especialmente en inferioridad jerárquica", "Solo cámaras", "Solo hombres"], 
        correct: 1, 
        cite: "El rechazo explícito no representa un requisito imprescindible... especialmente cuando la persona... se siente intimidada por encontrarse en una situación de inferioridad." 
    },
    { 
        q: "¿Qué es el 'Sexismo'?", 
        options: ["Atracción", "Expresión basada en la idea de que alguien es inferior por su sexo", "Muchos amigos", "Deporte"], 
        correct: 1, 
        cite: "Cualquier expresión... basada en la idea de que algunas personas son inferiores por razón de su sexo o género." 
    },
    { 
        q: "¿Qué es la 'Violencia en el trabajo ejercida por terceros'?", 
        options: ["Peleas colegas", "Conductas que afectan al trabajador por parte de clientes, proveedores o usuarios", "Robos calle", "Ruidos"], 
        correct: 1, 
        cite: "Conductas que afecten a las trabajadoras y a los trabajadores... por parte de clientes, proveedores o usuarios." 
    },

    // --- BIENESTAR Y PRESTACIONES ---
    { 
        q: "¿Qué es el Servicio de Bienestar?", 
        options: ["Clínica privada", "Fondo solidario para elevar la calidad de vida laboral de funcionarios y familiares", "Un banco", "Gimnasio"], 
        correct: 1, 
        cite: "Es un fondo solidario... su propósito es contribuir a elevar la Calidad de Vida laboral de los funcionarios y sus familiares." 
    },
    { 
        q: "¿Cuál es la cotización mensual para Bienestar?", 
        options: ["1%", "1.4% del total de la renta imponible", "5%", "Gratis"], 
        correct: 1, 
        cite: "Autorizarán el descuento mensual de la cotización, correspondiente al 1.4% del total de la renta imponible." 
    },
    { 
        q: "¿Cuándo se puede usar beneficios médicos en Bienestar?", 
        options: ["Al año", "6 meses", "A partir del primer día hábil siguiente de su primera cotización", "Al firmar"], 
        correct: 2, 
        cite: "Tendrán derecho a hacer uso de los beneficios médicos a partir del primer día hábil siguiente de su primera cotización." 
    },
    { 
        q: "¿Qué beneficio NO médico otorga Bienestar?", 
        options: ["Préstamos hipotecarios", "Subsidios por matrimonio, nacimiento y fallecimiento", "Venta de autos", "Seguro de viaje"], 
        correct: 1, 
        cite: "Algunos Subsidios se otorgan en el caso de: - Matrimonio - Nacimiento - Fallecimiento." 
    },
    { 
        q: "¿Qué es un 'Accidente en acto de servicio'?", 
        options: ["Cualquier caída", "Toda lesión que el funcionario sufra a causa o con ocasión del trabajo", "Gripe", "Accidente casa"], 
        correct: 1, 
        cite: "Accidente en acto de servicio toda lesión que el funcionario sufra a causa o con ocasión del trabajo." 
    },
    { 
        q: "¿Qué es un 'Accidente de trayecto'?", 
        options: ["Choque en el hospital", "Los que sufra el funcionario en el trayecto de ida o regreso entre su residencia y lugar de trabajo", "Caída en vacaciones", "Accidente en el supermercado"], 
        correct: 1, 
        cite: "Accidentes en actos de servicio los que sufra el funcionario en el trayecto de ida o regreso entre su residencia y su lugar de trabajo." 
    },
    { 
        q: "¿Qué es la 'Enfermedad Profesional'?", 
        options: ["Cansancio", "Aquella producida como causa directa del ejercicio de las funciones propias", "Cualquier gripe", "Estrés por ruido"], 
        correct: 1, 
        cite: "Enfermedad producida a consecuencia del desempeño de las funciones aquella que... tenga como causa directa el ejercicio de las funciones." 
    },
    { 
        q: "¿Qué derecho tiene el funcionario accidentado?", 
        options: ["Pagar su cuenta", "Asistencia médica gratuita hasta su total recuperación", "Indemnización inmediata", "Vacaciones pagadas"], 
        correct: 1, 
        cite: "Tendrá derecho a obtener la asistencia médica correspondiente hasta su total recuperación." 
    },
    { 
        q: "¿Qué plazo hay para iniciar la investigación por accidente?", 
        options: ["24 horas", "5 días", "Diez días posteriores al hecho", "30 días"], 
        correct: 2, 
        cite: "Investigación sumaria... deberá iniciarse a más tardar dentro de los diez días posteriores a aquel en que se haya producido el hecho." 
    },
    { 
        q: "¿Qué sucede con los sobrevivientes de un funcionario fallecido en servicio?", 
        options: ["Nada", "Tienen derecho a pensión de viudez u orfandad", "Se les paga 1 sueldo", "Se les da un diploma"], 
        correct: 1, 
        cite: "Falleciere a consecuencia de un accidente en acto de servicio... tendrán derecho... a una pensión de viudez u orfandad." 
    },

    // --- TEMAS ADICIONALES Y CIERRE ---
    { 
        q: "¿Cuál de estos es un hospital de MENOR complejidad?", 
        options: ["Gustavo Fricke", "Hospital de Petorca", "Biprovincial Quillota Petorca", "Marga Marga"], 
        correct: 1, 
        cite: "8 hospitales de menor complejidad: Adriana Cousiño... Adriana Cousiño... Petorca." 
    },
    { 
        q: "¿Qué es un 'Instituto' en salud?", 
        options: ["Colegio", "Establecimiento de atención preferente de una especialidad", "Oficina central", "Capacitación"], 
        correct: 1, 
        cite: "Recibirá la denominación de 'Instituto', el establecimiento destinado a la atención preferente de una determinada especialidad." 
    },
    { 
        q: "¿Quién clasifica la complejidad de los hospitales?", 
        options: ["El Director del Hospital", "El Ministerio de Salud a proposición del Director del Servicio", "Contraloría", "Los vecinos"], 
        correct: 1, 
        cite: "La clasificación de los Hospitales... será resuelta por el Ministerio de Salud a proposición del Director del Servicio correspondiente." 
    },
    { 
        q: "¿Qué es el 'CIRA'?", 
        options: ["Un hospital", "Consejo de Integración de la Red Asistencial", "Sindicato", "Curso"], 
        correct: 1, 
        cite: "Consejo de Integración de la Red Asistencial (CIRA)." 
    },
    { 
        q: "¿Qué es la 'Asignación de Pérdida de Caja'?", 
        options: ["Regalo", "Pago para quien maneja dinero efectivo", "Seguro", "Descuento"], 
        correct: 1, 
        cite: "Pérdida de caja, que se concederá sólo al funcionario que en razón de su cargo tenga manejo de dinero efectivo." 
    },
    { 
        q: "¿Qué es la 'Asignación de Movilización'?", 
        options: ["Pagar el TAG", "Pago por visitas domiciliarias o labores fuera de la oficina habitual", "Seguro auto", "Bono bencina"], 
        correct: 1, 
        cite: "Movilización, que se concederá al funcionario que... deba realizar visitas domiciliarias o labores inspectivas fuera de la oficina." 
    },
    { 
        q: "¿Qué es el 'Viático'?", 
        options: ["Sueldo", "Pago por gastos en comisión de servicios o cometidos funcionarios", "Premio", "Bono colación"], 
        correct: 1, 
        cite: "Viático, pasajes, u চারপাশে... en los casos de comisión de servicios y de cometidos funcionarios." 
    },
    { 
        q: "¿Qué es el 'Escalafón'?", 
        options: ["Escalera", "Ordenamiento según grado y calificaciones", "Lista asistencia", "Manual"], 
        correct: 1, 
        cite: "Escalafón: Es el ordenamiento de los funcionarios titulares... en orden decreciente producto de las calificaciones." 
    },
    { 
        q: "¿Qué es el 'Ascenso' o 'Promoción'?", 
        options: ["Descuento", "Derecho a acceder a cargo vacante de grado superior", "Publicidad", "Regalo"], 
        correct: 1, 
        cite: "Ascenso / Promoción: Es el derecho de un funcionario titular de acceder a un cargo vacante, de grado superior." 
    },
    { 
        q: "¿Qué es el 'Trato Descortés'?", 
        options: ["Delito", "Conductas groseras que afectan el ambiente", "Broma", "No saludar"], 
        correct: 1, 
        cite: "Trato descortés: Abarca comportamientos descorteses o groseros que podrían carecer de una manifiesta intención de dañar." 
    },
    { 
        q: "¿Qué es la 'Discriminación Arbitraria'?", 
        options: ["Elegir mejores", "Distinción sin justificación razonable por sexo, raza, edad, etc.", "Ley", "Mérito"], 
        correct: 1, 
        cite: "Discriminación arbitraria como toda distinción, exclusión o restricción que carezca de justificación razonable." 
    },
    { 
        q: "¿Qué es la 'Salud Incompatible'?", 
        options: ["Estar resfriado", "Hacer uso de licencia médica por más de 6 meses en los últimos 2 años", "Tener alergia", "Faltar 1 día"], 
        correct: 1, 
        cite: "Salud incompatible... haber hecho uso de licencia médica en un lapso continuo o discontinuo superior a seis meses en los últimos dos años." 
    },
    { 
        q: "¿Qué sanción tiene el personal que no retiene pensiones de alimentos de deudores?", 
        options: ["Censura", "Multa del 10% al 50% de su remuneración", "No tiene", "Despido"], 
        correct: 1, 
        cite: "Personal respectivo que incumpla estas obligaciones incurrirá en responsabilidad disciplinaria, sancionada con multa... (entre el 10% y 50% de su remuneración)." 
    },
    { 
        q: "¿Qué es la 'Anotación de Mérito'?", 
        options: ["Dinero", "Actuación destacada anotada en hoja de vida", "Foto", "Diploma"], 
        correct: 1, 
        cite: "Anotaciones De Mérito... constancia de una acción destacada." 
    },
    { 
        q: "¿Qué es la 'Anotación de Demérito'?", 
        options: ["Multa", "Constancia de falta o conducta negativa", "Descuento", "Baja grado"], 
        correct: 1, 
        cite: "Anotaciones de demérito... constancia de una falta o conducta negativa." 
    },
    { 
        q: "¿Qué es el 'Mansplaining'?", 
        options: ["Hombres explicando a mujeres expertas", "Hablar fuerte", "Gritar", "No saludar"], 
        correct: 0, 
        cite: "Darle a una mujer una explicación no solicitada cuando ella es experta... 'mansplaining'." 
    },
    { 
        q: "¿Qué es el 'Manterrupting'?", 
        options: ["Interrumpir a hombre", "Interrumpir a mujer bruscamente", "Luz cortada", "Radio"], 
        correct: 1, 
        cite: "Interrumpir bruscamente a una mujer mientras habla... 'manterrupting'." 
    },
    { 
        q: "¿Qué es el 'Sexismo Benévolo'?", 
        options: ["Ser amable", "Conductas paternalistas que asumen que las mujeres son menos competentes", "Dar flores", "Abrir puerta"], 
        correct: 1, 
        cite: "Conductas paternalistas... asumen que las mujeres son menos competentes e incapaces de tomar sus propias decisiones." 
    },
    { 
        q: "¿Qué es la 'Denuncia Infundada'?", 
        options: ["Denuncia sin abogado", "Efectuada sin fundamento o con falsedad para perjudicar", "Hablar", "Escribir"], 
        correct: 1, 
        cite: "Denuncia fue efectuada sin fundamento... constatándose la falsedad o el ánimo deliberado de perjudicar." 
    },
    { 
        q: "¿Fin último de la red SSVQP?", 
        options: ["Dinero", "Atención integral centrada en las personas con equidad y calidad", "Edificios", "Más gente"], 
        correct: 1, 
        cite: "Busca mejorar la salud de la población mediante una atención integral, centrada en las personas y basada en criterios de equidad, eficiencia y calidad." 
    }
];

let currentIdx = 0;
let userAnswers = [];
let selectedQuestions = [];

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function initQuiz() {
    selectedQuestions = shuffle([...questionPool]).slice(0, 100).map(q => {
        let opts = q.options.map((opt, i) => ({ text: opt, isCorrect: i === q.correct }));
        opts = shuffle(opts);
        return {
            ...q,
            options: opts.map(o => o.text),
            correct: opts.findIndex(o => o.isCorrect)
        };
    });
    userAnswers = new Array(selectedQuestions.length).fill(null);
    renderQuestion();
}

function startQuiz() {
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('quiz-wrapper').classList.remove('hidden');
}


function renderQuestion() {
    const container = document.getElementById('active-question-container');
    const q = selectedQuestions[currentIdx];
    
    container.innerHTML = `
        <div class="question-card">
            <span class="question-text">${currentIdx + 1}. ${q.q}</span>
            <div class="options">
                ${q.options.map((opt, i) => `
                    <label class="option-label ${userAnswers[currentIdx] === i ? 'selected' : ''}">
                        <input type="radio" name="answer" value="${i}" 
                            ${userAnswers[currentIdx] === i ? 'checked' : ''} 
                            onchange="saveAnswer(${i})"> 
                        ${opt}
                    </label>
                `).join('')}
            </div>
        </div>
    `;

    document.getElementById('prev-btn').style.visibility = currentIdx === 0 ? 'hidden' : 'visible';
    document.getElementById('next-btn').innerText = currentIdx === selectedQuestions.length - 1 ? 'Finalizar' : 'Siguiente';
    updateProgress();
}

function saveAnswer(idx) {
    userAnswers[currentIdx] = idx;
    const labels = document.querySelectorAll('.option-label');
    labels.forEach((l, i) => l.classList.toggle('selected', i === idx));
}

function nextQuestion() {
    if (currentIdx < selectedQuestions.length - 1) {
        currentIdx++;
        renderQuestion();
    } else {
        finishQuiz();
    }
}

function prevQuestion() {
    if (currentIdx > 0) {
        currentIdx--;
        renderQuestion();
    }
}

function updateProgress() {
    const prog = ((currentIdx + 1) / selectedQuestions.length) * 100;
    document.getElementById('progress-bar').style.width = prog + '%';
    document.getElementById('question-counter').innerText = `Pregunta ${currentIdx + 1} de ${selectedQuestions.length}`;
}

function finishQuiz() {
    document.getElementById('quiz-wrapper').classList.add('hidden');
    document.getElementById('results-screen').classList.remove('hidden');
    
    let score = 0;
    userAnswers.forEach((ans, i) => {
        if (ans === selectedQuestions[i].correct) score++;
    });

    const percent = ((score / selectedQuestions.length) * 100).toFixed(1);
    document.getElementById('final-stats').innerHTML = `
        <p>Correctas: ${score}</p>
        <p>Incorrectas: ${selectedQuestions.length - score}</p>
        <div class="final-score">${percent}%</div>
    `;
}

function showReview() {
    document.getElementById('results-screen').classList.add('hidden');
    document.getElementById('review-section').classList.remove('hidden');
    const list = document.getElementById('review-list');
    
    selectedQuestions.forEach((q, i) => {
        const isCorrect = userAnswers[i] === q.correct;
        const item = document.createElement('div');
        item.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;
        
        let answerText = '';
        if (isCorrect) {
            answerText = `<span style="color:green">Tu respuesta: ${q.options[q.correct]} (Correcto!)</span>`;
        } else {
            const givenAnswer = userAnswers[i] === null ? 'Sin contestar' : q.options[userAnswers[i]];
            answerText = `<span style="color:red">Tu respuesta: ${givenAnswer}</span><br>
                 <span style="color:green">Respuesta correcta: ${q.options[q.correct]}</span>`;
        }
        
        item.innerHTML = `
            <strong>${i + 1}. ${q.q}</strong><br>
            ${answerText}
            <div class="source-cite">
                <strong>Referencia PDF:</strong> ${q.cite}
            </div>
        `;
        list.appendChild(item);
    });
}

window.onload = initQuiz;