package com.myappdemo.backend.controller;

import com.myappdemo.backend.model.VisitingCard;
import com.myappdemo.backend.repository.VisitingCardRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cards")
@CrossOrigin(origins = "http://localhost:3000")
public class VisitingCardController {

    private final VisitingCardRepository repository;

    public VisitingCardController(VisitingCardRepository repository) {
        this.repository = repository;
    }

    // Karte erstellen
    @PostMapping
    public VisitingCard createCard(@RequestBody VisitingCard card) {
        return repository.save(card);
    }

    // Alle Karten abrufen
    @GetMapping
    public List<VisitingCard> getAllCards() {
        return repository.findAll();
    }

    // Nach ID abrufen
    @GetMapping("/{id}")
    public VisitingCard getCard(@PathVariable Long id) {
        return repository.findById(id).orElse(null);
    }

    // Suche nach Name und/oder Geburtstag
    @GetMapping("/search")
    public List<VisitingCard> searchCards(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String birthday) {

        if (name != null && birthday != null) {
            return repository.findByNameContainingIgnoreCase(name).stream()
                    .filter(card -> birthday.equals(card.getBirthday()))
                    .toList();
        } else if (name != null) {
            return repository.findByNameContainingIgnoreCase(name);
        } else if (birthday != null) {
            return repository.findByBirthday(birthday);
        } else {
            return repository.findAll();
        }
    }
}
