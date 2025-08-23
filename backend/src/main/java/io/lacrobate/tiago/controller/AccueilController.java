package io.lacrobate.tiago.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccueilController {

		@CrossOrigin(origins = "http://localhost:4200")
		@GetMapping("/bienvenue")
		public String accueillir() {
			return "bienvenue !";
		}
}
