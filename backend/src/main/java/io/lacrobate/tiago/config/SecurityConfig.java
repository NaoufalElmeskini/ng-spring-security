package io.lacrobate.tiago.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {
	@Bean
	public UserDetailsService users() {
		return new InMemoryUserDetailsManager(
				User.builder()
						.username("beatrice")
						.password("{noop}password")
						.build(),
				User.builder()
						.username("aboubakar")
						.password("{noop}password")
						.build()
		);
	}
}