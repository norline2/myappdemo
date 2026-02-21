package com.myappdemo.backend.repository;

import com.myappdemo.backend.model.VisitingCard;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface VisitingCardRepository extends JpaRepository<VisitingCard, Long> {

    List<VisitingCard> findByNameContainingIgnoreCase(String name);

    List<VisitingCard> findByBirthday(String birthday);

}

