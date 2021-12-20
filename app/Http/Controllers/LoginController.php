<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginController extends Controller
{
     public function getLogin()
    {
        if (auth()->check()) {
            return redirect(auth()->user()->peran);
        }

        return Inertia::render ('Login',[
            'pengguna'=>Pengguna::get()
    ]);
    }
    public function postLogin(Request $request)
    {
        $id      = $request->id;
        $password = $request->password;

        $pengguna = Pengguna::where('id', $id)->first();

        if ($pengguna == null) {
            return back();
        }

        if (Hash::check($password, $pengguna->password)) {
            Auth::login($pengguna);

            if ($pengguna->peran == 'guru') {
                return redirect('guru');
            }
            if ($pengguna->peran == 'murid') {
                return redirect('murid');
            }

        } else {
            return redirect('login')->with('alert', 'Password atau nip, Salah !' . Hash::check($password, $pengguna->password));
        }

    }

    public function getLogout()
    {
        Session::flush();
        return redirect('login')->with('alert', 'Kamu sudah logout');
    }
}
