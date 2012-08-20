//Selecionar todas as ruas que o onibus passa:
SELECT *
FROM linhas 
INNER JOIN itinerarios USING(lin_id)
INNER JOIN itinerarios_ruas_intermediarias USING(iti_id)
INNER JOIN ruas USING(rua_id)
WHERE lin_id = 125
ORDER BY iri_ordem


// Recuperar todos os horarios de determinada linha
SELECT 	*
FROM linhas 
INNER JOIN itinerarios USING(lin_id)
INNER JOIN horarios_itinerarios USING(iti_id)
INNER JOIN dias_semana USING(dia_id)
WHERE lin_id = 125
ORDER BY dia_id, hit_horario