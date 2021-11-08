import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailService } from './mail.service';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import configuration from '../config/configuration';

@Module({
    providers: [MailService],
    imports: [ConfigModule.forRoot({
        load: [configuration]
    }), MailerModule.forRootAsync({
        useFactory: async (config: ConfigService) => {
            return {
                transport: {
                    host: config.get<string>('mail.host'),
                    port: config.get<number>('mail.port'),
                    secureConnection: false,
                    tls: {
                        ciphers: 'SSLv3',
                        rejectUnauthorized: false
                    },
                    auth: {
                        user: config.get<string>('mail.user'),
                        pass: config.get<string>('mail.pass')
                    },
                },

                defaults: {
                    from: config.get<string>('mail.from')
                },

                template: {
                    dir: config.get<string>('mail.templatePath'),
                    adapter: new HandlebarsAdapter(),
                    options: {
                        strict: true,
                    },
                }
            }
        },
        inject: [ConfigService]
    })],
    exports: [MailService]
})
export class MailModule { }
