<?php /*Template name: page-doctors*/ ?>
<?php get_header(); ?>
<?php if(have_post)):?>
<?php while(have_post)): the_post(); ?>
<?php the_content(); ?>
<?php endwhile; ?>
<?php endif;?>
<?php  get_footer(); ?>