<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit2817f52faf6ed7ec0c1930e2d189a8d2
{
    public static $prefixLengthsPsr4 = array (
        'F' => 
        array (
            'Faker\\' => 6,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Faker\\' => 
        array (
            0 => __DIR__ . '/..' . '/fzaninotto/faker/src/Faker',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit2817f52faf6ed7ec0c1930e2d189a8d2::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit2817f52faf6ed7ec0c1930e2d189a8d2::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit2817f52faf6ed7ec0c1930e2d189a8d2::$classMap;

        }, null, ClassLoader::class);
    }
}
