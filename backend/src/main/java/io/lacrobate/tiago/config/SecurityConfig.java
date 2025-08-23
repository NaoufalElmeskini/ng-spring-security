package io.lacrobate.tiago.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class SecurityConfig {

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
				.csrf(csrf -> csrf.disable())
				.authorizeHttpRequests(auth -> auth
						// Autoriser toutes les OPTIONS sans auth
						.requestMatchers(org.springframework.http.HttpMethod.OPTIONS, "/**").permitAll()
						// protéger le reste (API nécessite Basic Auth)
						.anyRequest().authenticated()
				)
				.httpBasic(); // Basic Auth

		return http.build();
	}

	@Bean
	public CorsFilter corsFilter() {
		CorsConfiguration config = new CorsConfiguration();
		config.addAllowedOrigin("http://localhost:4200"); // ton front
		config.addAllowedHeader("*"); // inclut Authorization
		config.addAllowedMethod("*"); // GET, POST, OPTIONS, etc.
		config.setAllowCredentials(true);

		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", config);

		return new CorsFilter(source);
	}

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