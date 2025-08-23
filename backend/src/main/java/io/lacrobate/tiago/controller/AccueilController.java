package io.lacrobate.tiago.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccueilController {

	@GetMapping("/bienvenue")
	public String accueillir() {
		return "bienvenue !";
	}
}
