const passport = require("passport");
const { User } = require('../../db');
const KakaoStrategy = require("passport-kakao").Strategy;

const kakao = () => {
    passport.use(
        new KakaoStrategy(
            {
                clientId: process.env.KAKAO_SECRET_KEY,
                callbackURL: '/users/kakao/callback'
            },
            async (accessToken, refreshToken, profile, done) => {
                try {
                    const user = await User.findOne({
                        where: { id: profile.id, procider: 'kakao' }
                    });

                    if (user) {
                        done(null, user);
                    } else {
                        const newUser = await User.create({
                            email: profile._json && profile._json.kakao_account_email,
                            name: profile.displayName,
                            birthday: profile.birthday,
                            provider: 'kakao',
                        });
                        done(null, newUser);
                    }
                } catch (error) {
                    console.error(error);
                    done(error);
                }
            }
        )
    );
};

module.exports = { kakao };