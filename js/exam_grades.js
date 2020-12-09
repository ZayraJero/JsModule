const EXAM_GRADE = prompt('Ingresa la calificación del examen (0 a 100)')

if (EXAM_GRADE >= 90) {
    console.log('Tu calificación es: A')
} else if (EXAM_GRADE >= 80 && EXAM_GRADE < 90) {
    console.log('Tu calificación es: B')
} else if (EXAM_GRADE >= 70 && EXAM_GRADE < 80) {
    console.log('Tu calificación es: C')
} else if (EXAM_GRADE >= 60 && EXAM_GRADE < 70) {
    console.log('Tu calificación es: D')
} else if (EXAM_GRADE >= 50 && EXAM_GRADE < 60) {
    console.log('Tu calificación es: E')
} else {
    EXAM_GRADE < 50
    console.log('Tu calificación es: F')
} 
