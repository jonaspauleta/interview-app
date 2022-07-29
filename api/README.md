# Backend setup

```sh
composer install
./vendor/bin/sail up -d
./vendor/bin/sail artisan migrate:fresh --seed
```