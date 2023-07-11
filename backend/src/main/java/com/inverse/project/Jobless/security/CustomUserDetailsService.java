//package com.inverse.project.Jobless.security;
//
//import com.inverse.project.Jobless.models.User;
//import com.inverse.project.Jobless.repositories.UserRepository;
//import lombok.AllArgsConstructor;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import java.util.Set;
//import java.util.stream.Collectors;
//
//@Service
//@AllArgsConstructor
//public class CustomUserDetailsService implements UserDetailsService{
//    private UserRepository userRepository;
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        User user = userRepository.findByEmail(username);
//        if (user == null){
//            throw new UsernameNotFoundException(username + " not found");
//        }
//        Set<GrantedAuthority> authorities = user.getRoles().stream().map(
//                role -> new SimpleGrantedAuthority(role.getName())
//        ).collect(Collectors.toSet());
//        return new org.springframework.security.core.userdetails.User(
//                username,
//                user.getPassword(),
//                authorities
//        );
//    }
//}
